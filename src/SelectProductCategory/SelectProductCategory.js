import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class SelectProductCategory extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {
                    categoryId: uuidv4(),
                    categoryName: "technics",
                },
                {
                    categoryId: uuidv4(),
                    categoryName: "cosmetic",
                },
                {
                    categoryId: uuidv4(),
                    categoryName: "book",
                },
                {
                    categoryId: uuidv4(),
                    categoryName: "for home",
                },
            ],
        }
    }

    render(){
        return (
            <select 
                value={this.props.selctedItem}
                onChange={(e) => {this.props.getCategory(e.target.value)}} 
            >
                <option hidden>Select category</option>
                { 
                    this.state.categories.map(category => {
                        return(
                            <option value={category.categoryName} key={category.categoryId}>{category.categoryName}</option>
                        );
                    })
                }
            </select>
        );
    }
}