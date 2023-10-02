import "./filter.css";
import arrDownIco from "./../../../assets/icons/arr-down.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { reset, setRegion } from "../../../features/countries/countriesSlice";
const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (filter !== "") {
      dispatch(setRegion(filter.toLowerCase()));
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);
  return (
    <section className="filter-container">
      <div className="filter" onClick={toggleOptions}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <img src={arrDownIco} alt="" />
      </div>
      {showOptions ? (
        <div className="dropdown">
          {regions.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setFilter(item);
                  toggleOptions();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
