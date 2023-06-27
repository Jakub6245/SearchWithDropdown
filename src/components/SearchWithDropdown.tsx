import useSearchWithDropdown from "../hooks/useSearchWithDropdown";
import SearchList from "./SearchList";

const searchData = [
  {
    name: "Fixed TOC - table of contents for WordPress plugin",
    regularPrice: 20,
    salePrice: 3.99,
  },
  {
    name: "Jobify - The Most Popular WordpPress Job Board Theme",
    regularPrice: 59,
    salePrice: 3.99,
  },
  {
    name: "Lorem ipsum",
    regularPrice: 99,
    salePrice: 21,
  },
];

const SearchWithDropdown = () => {
  const { filteredData, searchedPhrase, setSearchedPhrase } =
    useSearchWithDropdown(searchData);

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPhrase(event.target.value);
  };
  console.log(filteredData);

  return (
    <div>
      <input
        value={searchedPhrase}
        onChange={searchInputHandler}
        style={{ width: "20%" }}
        type="text"
      />

      <SearchList filteredData={filteredData} />
    </div>
  );
};

export default SearchWithDropdown;
