import React from "react";
import { Component } from "react";


class CouItem extends Component {
    render(){
        return <li className="cou-list">
            
            {this.props.course.title}
           
            
        </li>
                
        

    }
}

export default CouItem