import React, { FC, useState, useMemo, useReducer } from "react";
import styled from "styled-components";
import rootReducer from "../../reducers/root.reducer"

import useCatalog from "../../modules/catalog/useCatalog";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const SelectInput: FC = () => {

    const [state, dispatch] = useReducer(rootReducer, {})
    
    const { products } = useCatalog();

    const [categories, setCategories] = useState([...new Set(products.map(({category}) => category))]);  
    const [inputCategory, setInputCategory] = useState('')

    const handleCategories = (e: SelectChangeEvent) => {
        console.log(e.target.value);
        setInputCategory(e.target.value);
        const category: any = [products.filter((product) => product.category === e.target.value )];
        console.log(category);
        dispatch({type: 'SELECT_CATEGORY', category: category });
      }

    useMemo(
        () => {
            setCategories([...new Set(products.map(({category}) => category))]);
            console.log(state)
        },[products, state]
    )

    return(
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputCategory}
                    label="Category"
                    onChange={handleCategories}
                >
                    <MenuItem value="">
                        <em>all</em>
                    </MenuItem>
                    {categories.map((_category: string) => {
                        return (
                            <MenuItem key={_category} value={_category}>{_category}</MenuItem>
                        )
                    })}
                    
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectInput;
