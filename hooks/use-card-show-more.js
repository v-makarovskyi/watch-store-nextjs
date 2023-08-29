import { useState } from "react";

export const useCardShowMore = () => {
    const [nextFourWatchs, setNextFourWatchs] = useState(4)

    const handleNextFourWatchs = () => {
        setNextFourWatchs(nextFourWatchs => nextFourWatchs + 4)
    }

    return {
        nextFourWatchs,
        handleNextFourWatchs
    }

}