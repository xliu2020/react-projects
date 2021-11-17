import React from "react";
import { Component } from "react";


class CouItem extends Component {
    render(){
        return <li className="CourseList">
            
            {this.props.course.title}
           
            
        </li>
                
        

    }
}

export default CouItem