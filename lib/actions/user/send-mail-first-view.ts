"use server";

import { sendEmail } from "@/lib/actions/email/send-emai";
import { getCurrentUser } from "@/lib/actions/user/getCurrentUser";
import { client } from "@/lib/prisma";

export const sendEmailForFirstView = async (videoId: string) => {
  try {
    const users = await getCurrentUser();

    if (!users) return { status: 404 };

    const firstViewSettings = await client.user.findUnique({
      where: {
        id: users.user?.id,
      },
      select: {
        firstView: true,
      },
    });

    if (firstViewSettings?.firstView) return;

    const video = await client.video.findUnique({
      where: {
        id: videoId,
      },
      select: {
        title: true,
        views: true,
        User: {
          select: {
            email: true,
          },
        },
      },
    });

    if (video && video.views === 0) {
      await client.video.update({
        where: {
          id: videoId,
        },
        data: {
          views: video.views + 1,
        },
      });
    }
    if (!video) return;
    if (video?.User?.email) {
      const { transporter, mailOptions } = await sendEmail(
        video.User.email,
        "You got a viewer",
        `You video ${video.title} just got its first viewer`
      );

      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          console.log(error.message);
        } else {
          const notification = await client.user.update({
            where: {
              id: users.user?.id,
            },
            data: {
              notification: {
                create: {
                  content: mailOptions.text,
                },
              },
            },
          });
          if (notification) {
            return { status: 200 };
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
