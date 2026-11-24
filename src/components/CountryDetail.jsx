function CountryDetail({ country, allCountries, onBack, onSelectCountry }) {
    
   return (
  <div className="country-detail">
    <button className="back-button" onClick={onBack}>Back</button>

    <div className="country-detail-content">
      <div className="country-detail-flag">
        <img src={country.flags.png} alt={`${country.name} flag`} />
      </div>

      <div className="country-detail-body">
        <h2>{country.name}</h2>

        <div className="country-detail-columns">
          <div className="country-detail-info1">
            <p><strong>Native Name:</strong> {country.nativeName}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Sub Region:</strong> {country.subregion}</p>
            <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
          </div>

          <div className="country-detail-info2">
            <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.join(", ")}</p>
            <p><strong>Currencies:</strong> {country.currencies?.map((c) => c.name).join(", ") || "N/A"}</p>
            <p><strong>Languages:</strong> {country.languages?.map((l) => l.name).join(", ")}</p>
          </div>
        </div>

        <div className="border-countries">
          <strong>Border Countries:</strong>
          <div className="border-buttons">
            {country.borders && country.borders.length > 0 ? (
              country.borders.map((borderCode) => {
                const borderCountry = allCountries.find(
                  (c) => c.alpha3Code === borderCode
                );
                if (!borderCountry) return null;
                return (
                  <button
                    key={borderCode}
                    type="button"
                    className="border-btn"
                    onClick={() => onSelectCountry(borderCountry)}
                  >
                    {borderCountry.name}
                  </button>
                );
              })
            ) : (
              <span>None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
export default CountryDetail;