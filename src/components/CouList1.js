import React from "react";
import CouItem1 from "./CouItem1";

class CouList extends React.Component {

    render(){
        return(
            <div className="CourseList">
                {this.props.addedCourses.map(course => (
                   <CouItem1 key={course.id} course={course} />
                ))}
                
            </div>
        )
    }
}

export default CouList