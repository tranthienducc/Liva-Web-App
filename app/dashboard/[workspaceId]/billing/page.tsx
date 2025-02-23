import { getPaymentInfo } from "@/lib/actions/billing/get-payment-info";

const BillingPage = async () => {
  const payment = await getPaymentInfo();
  return (
    <div className="bg-[#1d1d1d] flex flex-col rounded-xl gap-y-8 p-5">
      <div>
        <h2 className="text-2xl">Current Plan</h2>
        <p className="text-[#9d9d9d]">Your payment history</p>
      </div>
      <div>
        <h2 className="text-2xl">
          ${payment?.data?.subscription?.plan === "PRO" ? "99" : "0"}/Month
        </h2>
        <p className="text-[#9d9d9d]">
          {payment?.data?.subscription?.plan} Plan
        </p>
      </div>
    </div>
  );
};

export default BillingPage;
