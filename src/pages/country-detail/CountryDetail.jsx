import { useDispatch, useSelector } from "react-redux";
import "./country-detail.css";
import { useEffect } from "react";
import { countriesGetByCode } from "../../features/countries/countriesAction";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import backIco from "./../../assets/icons/back.svg";
import Spinner from "../../components/spinner/Spinner";
import { reset } from "../../features/countries/countriesSlice";

const CountryDetail = () => {
  const { loading, error, countryDetails, success } = useSelector(
    (state) => state.countries
  );
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    if (code) {
      dispatch(countriesGetByCode(code.toLowerCase()));
    }
    if (error) {
      alert(error);
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, code, error]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="country-detail-container">
          <Link className="back-button" to="/">
            <img src={backIco} alt="" /> Back
          </Link>

          <div className="country-detail-content">
            {countryDetails.length > 0 ? (
              <>
                <img
                  src={countryDetails[0].flags.png}
                  alt="name"
                  className="country-detail-image"
                />
                <div className="country-detail-right">
                  <h1>{countryDetails[0].name.common}</h1>
                  <div className="details">
                    <div className="detail-left">
                      <p>
                        Offcial Name:{" "}
                        <span>{countryDetails[0].name.official}</span>
                      </p>
                      <p>
                        Population: <span>{countryDetails[0].population}</span>
                      </p>
                      <p>
                        Region: <span>{countryDetails[0].region}</span>
                      </p>

                      <p>
                        Sub Region: <span>{countryDetails[0].subregion}</span>
                      </p>
                      <p>
                        Capital: <span>{countryDetails[0].capital}</span>
                      </p>
                    </div>

                    <div className="detail-right">
                      <p>
                        Top Level Domain:{" "}
                        <span>{countryDetails[0].tld[0]}</span>
                      </p>
                      <p>
                        Currencies:
                        <span>
                          {Object.values(countryDetails[0].currencies)
                            .map((item) => {
                              return item.name;
                            })
                            .join(",")}
                        </span>
                      </p>

                      <p>
                        Languages:
                        <span>
                          {Object.values(countryDetails[0].languages)
                            .map((item) => {
                              return item;
                            })
                            .join(", ")}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="border">
                    <p>Border Countries:</p>
                    {countryDetails[0].borders ? (
                      countryDetails[0].borders.map((item) => {
                        return (
                          <Link className="border-name" to={`/${item}`}>
                            {item}
                          </Link>
                        );
                      })
                    ) : (
                      <span>No borders</span>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>No details found</>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default CountryDetail;
