import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";

const PaymentButton = () => {
  const { onSubscribe } = useSubscription();
  return (
    <Button className="text-sm w-full" onClick={onSubscribe}>
      Upgrade
    </Button>
  );
};

export default PaymentButton;
