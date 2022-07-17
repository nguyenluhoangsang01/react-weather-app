import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { cityOptions } from "../../API";
import { CITY_BASE_URL } from "../../config";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);

    onSearchChange(searchData);
  };

  const loadOptions = async (search) => {
    return fetch(`${CITY_BASE_URL}?namePrefix=${search}`, cityOptions)
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((item) => {
            return {
              value: `${item.latitude} - ${item.longitude}`,
              label: `${item.name} - ${item.countryCode}`,
            };
          }),
        };
      });
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={500}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
