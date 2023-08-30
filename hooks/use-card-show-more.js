import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useCardShowMore = () => {
  const router = useRouter();
  const [nextFourWatchs, setNextFourWatchs] = useState(4);

  useEffect(() => {
    setNextFourWatchs(4);
  }, [router.query.categorySlug]);

  const handleNextFourWatchs = (categorySlug) => {
    setNextFourWatchs((nextFourWatchs) => nextFourWatchs + 4);
  };

  return {
    nextFourWatchs,
    handleNextFourWatchs,
  };
};
