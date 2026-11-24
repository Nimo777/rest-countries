import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import FilterRegion from "./components/RegionFilter";
import CountryCard from "./components/CountryCard";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  useEffect(() => {
    axios.get("/src/API/data.json")
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion = region
      ? country.region.toLowerCase().includes(region.toLowerCase())
      : true;

    return matchesSearch && matchesRegion;
  })
  
  return (
    <>

    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    
    {selectedCountry ? (
          <CountryDetail
            country={selectedCountry}
            allCountries={countries}
            onBack={() => setSelectedCountry(false)}
            onSelectCountry={(country) => setSelectedCountry(country)}
          />
        ) : (
          <>
            <div className="controls">
              <SearchBar search={search} setSearch={setSearch} />
              <FilterRegion region={region} setRegion={setRegion} />
            </div>
            <section className="countries-grid">
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.alpha3Code}
                  country={country}
                  onClick={() => setSelectedCountry(country)}
                />
              ))}
            </section>
          </>
        )}
    </>
  );
}

export default App;
