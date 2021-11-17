import React from "react";

class InputCou extends React.Component {

    state = {

        title:"",
        isGreen:true

       
        
    };

    changeTheme= () => {

       this.setState({
           isGreen:!this.state.isGreen
        })
        
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

        const theme=this.state.isGreen ? "green" : "blue";

        return (<div>
                    
                    <form onSubmit={this.handleSubmit} className="f-container">
                        <input type="text" placeholder="Add your course..." value={this.state.title} onChange={this.onChange} className="f-input"/>
                        <input type="submit" value="Add Course" className={theme}/>
                    </form>
                <button className={theme} onClick={this.changeTheme}>Click here to change the theme</button>
            </div>)
    }
}

export default InputCou