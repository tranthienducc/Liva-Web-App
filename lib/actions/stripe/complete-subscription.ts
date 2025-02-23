"use server";

import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_CLIENT_SECRET as string);

export const completeSubscription = async (session_id: string) => {
  try {
    const users = await getCurrentUser();
    if (!users) return { status: 404 };
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log("Session-Stripe", session);

    if (session) {
      const customer = await client.user.update({
        where: {
          id: users?.user?.id,
        },
        data: {
          subscription: {
            update: {
              data: {
                customerId: session.customer as string,
                plan: "PRO",
              },
            },
          },
        },
      });
      if (customer) {
        return { status: 200 };
      }
    }
    return { status: 400 };
  } catch {
    return { status: 400 };
  }
};
