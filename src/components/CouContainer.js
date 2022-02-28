import React, { Component } from "react";
import Header from "./Header";
import CouList from "./CouList";
import InputCou from "./InputCou";
import { v4 as uuidv4 } from "uuid";
// import { InstantSearch} from 'react-instantsearch-dom';

import "../App.css";


class CouContainer extends Component {

    constructor(props){

        super(props);
        this.state = {
            courses: [
               {
                   id:uuidv4(),
                   title:"CNIT 103 - Hardware – 3 units",
                   added:true
               },               
               {
                   id:uuidv4(),
                   title:"CNIT 131 – Internet & Intro to HTML, CSS – 3 units",
                   added:true
               },
               {
                    id:uuidv4(),
                    title:"CNIT 106 – Introduction to Networks – 3 units",
                    added:true
                },
                {
                    id:uuidv4(),
                    title:"CNIT 120 – Network Security – 3 units",
                    added:true
                }
            ], 
            isGreen:true,

          
        }

    }
    
    changeTheme = () => {

        this.setState({
            isGreen:!this.state.isGreen
         })
         
     };
    

    
    addCourse = title => {
        const newAddCou ={
            id:uuidv4(),
            title:title,
            added:true
        };
        const course = this.state.courses;

        this.setState({
            courses:course.concat(newAddCou),
            
        });

    }



    deleteCou = id =>{


        this.setState({
            
            courses: this.state.courses.filter(course =>{
                    if (course.id === id) {

                        course.added=false;
                       
                    }
                     return course.id !== id;

                }),
        
        });
       
    };





    render() {

       
        const theme=this.state.isGreen ? "green" : "purple";
        
        return(
            <div className={theme}> 
                 <div className="container">              
                    <Header />
                    <InputCou addCouItemProps={this.addCourse} changeThemeProps={this.changeTheme}/>
                    <CouList courses={this.state.courses} deleteCouProps={this.deleteCou}/>
                  
                    
                </div>
            </div>
        )
    }
}

export default CouContainer