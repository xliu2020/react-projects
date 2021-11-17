import React from "react";
import Header from "./Header";
import CouList from "./CouList";
import CouList1 from "./CouList1";
import InputCou from "./InputCou";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

class CouContainer extends React.Component {

    state = {
        courses: [
           {
               id:1,
               title:"CNIT 103 - Hardware – 3 units",
               added:false
           },               
           {
               id:2,
               title:"CNIT 131 – Internet & Intro to HTML, CSS – 3 units",
               added:false
           },
           {
                id:3,
                title:"CNIT 106 – Introduction to Networks – 3 units",
                added:false
            },
            {
                id:4,
                title:"CNIT 120 – Network Security – 3 units",
                added:false
            }
        ],

        addedCourses:[] //new add array
    }

    addCouItem = title => {
        const newAddCou ={
            id:uuidv4(),
            title:title,
            added:true
        };

        this.setState({
            addedCourses:[...this.state.addedCourses,newAddCou]
        });
    }

    // handleChange = id => {

    //     this.setState({
    //         courses:this.state.courses.map(course =>{
    //             if (course.id === id) {
    //                 course.added = true;
    //             }
    //             return course;
    //         })
    //     })
    // };
    
    deleteCou = id =>{

        this.setState({
            courses:[

                ...this.state.courses.filter(course =>{

                    return course.id !== id;
                })
            ]
        });
    };



    render() {
        return(
            
            <div className="containter">
                <Header />
                <InputCou addCouItemProps={this.addCouItem}/>
                <CouList courses={this.state.courses} deleteCouProps={this.deleteCou}/>
                <CouList1 addedCourses={this.state.addedCourses}/>
               
            </div>
        )
    }
}

export default CouContainer