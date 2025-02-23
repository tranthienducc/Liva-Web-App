import { completeSubscription } from "@/lib/actions/stripe/complete-subscription";
import { redirect } from "next/navigation";

type Props = {
  searchParams: { session_id?: string; cancel?: boolean };
};
const page = async ({ searchParams: { cancel, session_id } }: Props) => {
  if (session_id) {
    const customer = await completeSubscription(session_id);
    if (customer?.status === 200) {
      return redirect("/");
    }
  }
  if (cancel) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h4 className="text-5xl font-bold">Not authenticated</h4>
        <p>Opp! something went wrong</p>
      </div>
    );
  }
};

export default page;
