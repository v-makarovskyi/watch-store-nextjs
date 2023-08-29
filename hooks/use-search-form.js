import { useRouter } from "next/router";
import { useState } from "react";

const useSearchFormSubmit = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText) {
      let route = `/search?searchText=${searchText}`;
      router.push(route, undefined, { scroll: false });
      setSearchText("");
    } else {
      router.push("/", undefined, { scroll: false });
      setSearchText("");
    }
  };

  return {
    searchText,
    setSearchText,
    handleSubmit,
  };
};

export default useSearchFormSubmit;
