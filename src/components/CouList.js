import React from "react";
import { Component } from "react";


function CouItem(props) {
    
        return (
            <li className="course-item">
                {props.course.title}
                <button onClick={()=>props.deleteCouProps(props.course.id)}>
                    Delete
                </button>                
            </li>     
        )  
   
}

class CouList extends Component {
    
    render(){
        return(
            <div className="course-list">
                {this.props.courses.map(course => (
                   <CouItem key={course.id} course={course} deleteCouProps={this.props.deleteCouProps}/>
                ))}
                
            </div>
        )
    }
}

export default CouList