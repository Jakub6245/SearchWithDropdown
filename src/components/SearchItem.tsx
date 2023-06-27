import React from "react";

interface ISearchItem {
  name: JSX.Element;
  regularPrice: number;
  salePrice: number;
}

const SearchItem: React.FC<ISearchItem> = ({
  name,
  regularPrice,
  salePrice,
}) => {
  return (
    <div>
      <li>
        {name}
        <s>${salePrice}</s>
        <strong>${regularPrice}</strong>
      </li>
    </div>
  );
};

export default SearchItem;

// dangerouslySetInnerHTML={{ __html: "<strong>1231231</strong>" }}
