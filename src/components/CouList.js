import React from "react";
import CouItem from "./CouItem";

class CouList extends React.Component {
    
    render(){
        return(
            <div className="CourseList">
                {this.props.courses.map(course => (
                   <CouItem key={course.id} course={course} deleteCouProps={this.props.deleteCouProps}/>
                ))}
                
            </div>
        )
    }
}

export default CouList