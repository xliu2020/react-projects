import React from "react";
// import algoliasearch from "algoliasearch";
// import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

class InputCou extends React.Component {

    state = {

        title:"",
        isGreen:true

       
        
    };


    onChange = e => {
        this.setState({
            title:e.target.value
        });
    }
    
    handleSubmit = e => {

        e.preventDefault();
        this.props.addCouItemProps(this.state.title);
        this.setState({
            title:""
        });


    };

    render(){

        // const theme=this.state.isGreen ? "green" : "blue";

        return (<div className="inputCourse">
                    
                    <form onSubmit={this.handleSubmit} className="f-container">
                   
                        <input type="text" placeholder="Add your course..." value={this.state.title} onChange={this.onChange} className="f-input"/>
                        <input type="submit" value="Add Course" className="f-submit"/>
                    </form>               
                <button className="changeThemeBtn" onClick={this.props.changeThemeProps}>Click here to change the theme</button>
            </div>)
    }
}

export default InputCou;