import { useState, useMemo, useDeferredValue } from "react";
import HighlightedText from "../components/HighlightedText";

const useSearchWithDropdown = (
  searchData: { name: string; regularPrice: number; salePrice: number }[]
) => {
  const [searchedPhrase, setSearchedPhrase] = useState("");

  const defferedData = useDeferredValue(searchedPhrase);

  const checkPhrase = useMemo(
    () => searchedPhrase.length > 3,
    [searchedPhrase]
  );

  const filteredData = useMemo(() => {
    if (!checkPhrase) return [];
    return searchData
      .filter((el) =>
        el.name.toLowerCase().includes(defferedData.toLowerCase())
      )
      .map((el) => {
        return {
          name: <HighlightedText text={el.name} highlight={defferedData} />,
          regularPrice: el.regularPrice,
          salePrice: el.salePrice,
        };
      });
  }, [searchData, defferedData, checkPhrase]);
  console.log(filteredData);

  return { filteredData, setSearchedPhrase, searchedPhrase };
};

export default useSearchWithDropdown;
