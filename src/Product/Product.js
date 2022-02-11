import React, { Component } from "react";

export class Product extends Component{
    render(){
        return (
            <tr>
              <td>{this.props.product?.name || ''}</td>
              <td>{this.props.product?.category.categoryName || ''}</td>
              <td>{this.props.product?.price || ''}</td>
              <td>
                  <button onClick={this.props.onDelete}>Delete</button>
              </td>
              <td>
                  <button onClick={this.props.onEdit}>Edit</button>
              </td>
            </tr>
        ); 
    }
} 