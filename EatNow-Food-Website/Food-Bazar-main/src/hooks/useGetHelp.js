import { useEffect, useState } from "react";

function useGetHelp() {
  const [faqs, setFaqs] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/support/issues/faq?"
    );
    const json = await response.json();

    setFaqs(json?.data?.issues?.data);
  };

  return { faqs };
}

export default useGetHelp;
