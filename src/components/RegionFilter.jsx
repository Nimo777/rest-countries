import { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

function FilterRegion({ region, setRegion }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedRegion) => {
  setRegion(region === selectedRegion ? "" : selectedRegion);
  setIsOpen(false);
};

  return (
    <div className="filter-dropdown">
      <button
        type="button"
        className="filter-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{region || "Filter by Region"}</span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>

      {isOpen && (
        <ul className="filter-menu">
          {regions.map((item) => (
            <li
              key={item}
              className={`filter-option ${region === item ? "active" : ""}`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterRegion;