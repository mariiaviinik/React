import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectCategories } from "../../Store/Categories/selector";
import { v4 as uuidv4 } from "uuid";
import { 
    Select, 
    Box,
    InputLabel,
    MenuItem,
    FormControl
} from '@mui/material';

export const SelectProductCategory = ({selectedItem, getCategory}) => {
    SelectProductCategory.propTypes = {
        selctedItem: PropTypes.string,
        getCategory: PropTypes.func,
    }
    
    const categories = useSelector(selectCategories);
    
    const [currentCategory, setCurrentCategory] = useState('');

    const onSelectChange = useCallback((e) => {
        setCurrentCategory(e.target.value);
        getCategory(e.target.value);
    }, [getCategory])

    if(currentCategory !== '' && categories.indexOf(currentCategory) === -1){
        setCurrentCategory('');
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{width: 200, marginTop: 1}}>
                <InputLabel id="select">Select category</InputLabel>
                <Select
                    labelId="select"
                    label="Select category"
                    id="demo-simple-select"
                    value={selectedItem  || currentCategory}
                    onChange={onSelectChange}
                >
                    { 
                        categories.map(category => {
                            return(
                                <MenuItem 
                                    value={category}
                                    key={uuidv4()}
                                >
                                    {category}
                                </MenuItem>
                            );
                        })
                    }
                </Select>
            </FormControl>
      </Box>
    );
}