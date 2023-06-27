import React from "react";
import SearchItem from "./SearchItem";

interface ISearchList {
  filteredData: {
    name: JSX.Element;
    regularPrice: number;
    salePrice: number;
  }[];
}

const SearchList: React.FC<ISearchList> = ({ filteredData }) => {
  return (
    <ul>
      {filteredData.map((el, i) => (
        <SearchItem
          key={i}
          name={el.name}
          regularPrice={el.regularPrice}
          salePrice={el.salePrice}
        />
      ))}
    </ul>
  );
};

export default SearchList;
