import React from "react";
import { Component } from "react";


class CouItem extends Component {
    render(){
        return <li className="cou-list">
            
            {this.props.course.title}
            <button onClick={()=>this.props.deleteCouProps(this.props.course.id)}>Delete</button>
            
        </li>
                
        

    }
}

export default CouItem