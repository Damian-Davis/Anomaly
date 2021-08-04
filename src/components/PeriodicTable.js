import React from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";
import { HashLink } from "react-router-hash-link";

 export const colorMap = {
  "noble gas": "#fcac15",
  "alkaline earth metal": "#dc462a",
  "diatomic nonmetal": "#e7069f",
  "alkali metal": "#8F2D56",
  "transition metal": "#1f1f95",
  "post-transition metal": "#10806f",
  lanthanide: "#4aaf81",
  metalloid: "#73D2DE",
};

const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
          className="element"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colorMap[element.category],
          }}
        >
          <HashLink smooth to={element.id} 
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
          <strong>{element.symbol}</strong>
          </HashLink>
          

          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      ))}
    </div>
  );
};

export default PeriodicTable;
