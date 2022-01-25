import {useState} from "react";
import {useDispatch} from "react-redux";

import useCatalog from "../../modules/catalog/useCatalog";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function SortInput() {

    const dispatch  = useDispatch();

    const { products } = useCatalog();

    const [inputCategory, setInputCategory] = useState('');

    const handleSorting = (e: SelectChangeEvent) => {
        setInputCategory(e.target.value)
        const value = e.target.value;
        if (value === 'low') {
            const resLow = [...products.sort((a, b) => a.price - b.price)];
            dispatch({type: 'SEARCH_RESULT', result: resLow})
        } else if (value === 'higth') {
            const resHigth = [...products.sort((a, b) => b.price - a.price)];
            dispatch({type: 'SEARCH_RESULT', result: resHigth})
        } else if (value === undefined) {
            const res = [...products.sort((a, b) => a.id - b.id)]
            dispatch({type: 'SEARCH_RESULT', result: res})
        }

    }
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 0, minWidth: 250 }}>
                <InputLabel id="sort-by-price">Sort by Price</InputLabel>
                <Select
                    labelId="sort-by-price"
                    id="sort-price"
                    value={inputCategory ? inputCategory : ''}
                    label="Sort by Price"
                    onChange={handleSorting}
                >
                    <MenuItem>
                        <em>no sorting</em>
                        </MenuItem>
                    <MenuItem key="low" value="low">Low to High</MenuItem>
                    <MenuItem key="higth" value="higth">Higth to Low</MenuItem>      
                </Select>
            </FormControl>
        </Box>
  )
}

export default SortInput;
