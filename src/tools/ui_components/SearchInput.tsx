import {useState, useMemo} from 'react';
import {useSelector, useDispatch} from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { type } from 'os';

interface NameOptionType {
    inputValue?: string;
    title: string;
  }

const filter = createFilterOptions<NameOptionType>()

function SearchInput() {

    // handle state & dispatch of reducer:
    const products = useSelector((state: any) => state.catalog.products)
    const dispatch = useDispatch();

    // save value of search
    const [value, setValue] = useState<any>(null)

    // handle filter of products when type 'enter';
    useMemo (
        () => {
            const res = products.filter((product: any) => product.title.toLowerCase().includes(value?.title.toLowerCase()))
            if (value !== null && res.length > 0) {
                dispatch({type: 'SEARCH_RESULT', result: res});
            }
            if (value !== null && res.length === 0) dispatch({type: 'NO_RESULT'})
        },[dispatch, value, products]
    );

    // handle live search by typing:
    const handleChange = (e: any) => {
        const res = products.filter((product: any) => product.title.toLowerCase().includes(e.target.value.toLowerCase()));  
        if (res.length > 0) {
            dispatch({type: 'RESULT_INCLUDE', include: e.target.value})
            dispatch({type: 'SEARCH_RESULT', result: res})
        } else {
            dispatch({type: 'RESULT_INCLUDE', include: e.target.value})
            dispatch({type: 'NO_RESULT'})
        }   
    };

    return (
        <Autocomplete
            value={value}
            onChange={
                (e, newValue) => {
                if (typeof newValue === 'string') {
                    setValue({
                        title: newValue,
                    });
                } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                    title: newValue.inputValue,
                });
                } else {
                setValue(newValue);
                }
            }}

            filterOptions={(options, params) => {
                const filtered = filter(options, params);                
                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="search-products"
            options={products}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                return option.inputValue;
                }
                // Regular option
                return option.title;
            }}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            sx={{ width: 250 }}
            freeSolo
            
            renderInput={(params) => (
                <TextField onChange={handleChange} {...params} label="Search Products.." />
              )}
            />
    )
}

export default SearchInput;
