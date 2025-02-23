import axios from "axios";

export const useSubscription = () => {
  const onSubscribe = async () => {
    const response = await axios.get("/api/payment");
    if (response.data.status === 200) {
      return (window.location.href = `${response.data.session_url}`);
    }
  };
  return { onSubscribe };
};
