import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geo_api_url, geo_api_options } from "../../api";


const Search = ({ onSearchchange }) => {

    const loadOptions = (inputValue) => {
        // try {
        //     const response = await fetch(geo_api_url, geo_api_options);
        //     const result = await response.json();
        //     return (result);
        // } catch (error) {
        //     console.error(error);
        // }

        return fetch(
            `${geo_api_url}/places?minPopulation=1000000&namePrefix=${inputValue}&types=CITY`, geo_api_options)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.country}`,
                        }
                    })
                }
            }).catch((err) => console.error(err));
    }

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchchange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;