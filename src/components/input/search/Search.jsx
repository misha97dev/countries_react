import "./search.css";
import searchIco from "./../../../assets/icons/search.svg";
import { setSearchValue } from "../../../features/countries/countriesSlice";
import { useDispatch, useSelector } from "react-redux";
const Search = () => {
  const { searchValue } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value.toLowerCase()));
  };
  return (
    <section className="search-container">
      <img className="search-icon" src={searchIco} alt="" />

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={searchValue}
        onChange={handleChange}
      />
    </section>
  );
};

export default Search;
