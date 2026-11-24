

function CountryCard({ country,onClick }) {

return(
    <article className="country-card" onClick={onClick}>
        <img src={country.flags.png} alt={`${country.name} flag`} />
        <div className="country-info">
            <h2>{country.name}</h2>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
        </div>
    </article>

);

}
export default CountryCard;