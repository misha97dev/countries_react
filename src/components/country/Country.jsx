import { useDispatch, useSelector } from "react-redux";
import "./country.css";
import { useEffect, useState } from "react";
import {
  countriesGetAll,
  countriesGetByRegion,
} from "../../features/countries/countriesAction";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

const Country = () => {
  const { countriesData, loading, success, error, region, searchValue } =
    useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countriesGetAll());

    if (error) {
      alert(error);
    }
    if (region) {
      dispatch(countriesGetByRegion(region));
    }
  }, [dispatch, success, error, region]);
  let filteredCountries = countriesData.filter((item) =>
    item.name.common.toLowerCase().includes(searchValue)
  );
  return (
    <section className="country-container">
      {loading ? (
        <Spinner />
      ) : (
        // filteredCountries.length > 0 &&
        filteredCountries.map((item, index) => {
          return (
            <Link
              to={`/${item.cca2}`}
              // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
              className="country-card"
              key={index}
            >
              <img src={item.flags.png} alt="" className="country-image" />
              <div className="country-content">
                <h3>{item.name.common}</h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;
