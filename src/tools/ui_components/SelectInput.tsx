import { FC, useState, useMemo } from "react";
import {useDispatch} from "react-redux";

import useCatalog from "../../modules/catalog/useCatalog";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const SelectInput: FC = () => {

    const dispatch  = useDispatch();

    const { products } = useCatalog();

    const [categories, setCategories] = useState([...new Set(products.map(({category}) => category))]);  
    const [inputCategory, setInputCategory] = useState('')

    const handleCategories = (e: SelectChangeEvent) => {
        setInputCategory(e.target.value);
        const category: any = products.filter((product) => product.category === e.target.value);
        dispatch({type: 'SELECT_CATEGORY', category: category });        
    }

    useMemo(
        () => {
            setCategories([...new Set(products.map(({category}) => category))]);
        },[products]
    )

    return(
        <FormControl sx={{ m: 0, width: '100%', minWidth: 150 }}>
            <InputLabel id="filter-by-category">Filter by Category</InputLabel>
            <Select
                labelId="filter-by-category"
                id="category"
                value={inputCategory ? inputCategory : ''}
                label="Filter by Category"
                onChange={handleCategories}
            >
                <MenuItem>
                    <em>all</em>
                </MenuItem>
                {categories.map((_category: string) => {
                    return (
                        <MenuItem key={_category} value={_category}>{_category}</MenuItem>
                    )
                })}
                
            </Select>
        </FormControl>
    );
};

export default SelectInput;
