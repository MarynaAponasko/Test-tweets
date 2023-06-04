import { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./filter.module.css";

const Filter = ({ filter, setFilter }) => {
  const possibleValues = ["show all", "follow", "following"];

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setFilter(selectedValue);
    localStorage.setItem("selectedFilter", selectedValue);
  };
  useEffect(() => {
    const savedFilter = localStorage.getItem("selectedFilter");
    if (savedFilter) {
      setFilter(savedFilter);
    }
  }, [setFilter]);

  return (
    <select
      value={filter}
      onChange={handleFilterChange}
      className={s.filterMain}
    >
      {possibleValues.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
