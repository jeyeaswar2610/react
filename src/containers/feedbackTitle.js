import React from 'react';
import {connect} from 'react-redux'


class FeedbackDescription extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
        }
    }

    componentWillUpdate(){
        this.setState({title: this.props.selectedFBprops.title})
    }

    submitForm(e){
        e.preventDefault();
        console.log(e)
    }

    handleNameChange(e){
        console.log(e.target.value);
        this.setState(this.props.selectedFBprops.title);
    }

    render() {
        if(this.props.selectedFBprops== null){
            return(
                <div>
                    Click on any title!!!!
                </div>
            )
        }
        
        return ( 
            <div>
                <ul>
                    <li>Feedback Description will come here</li>
                    <li>{this.props.selectedFBprops.description}</li>
                    <form onSubmit={this.submitForm}>
                    <input type="text" value={this.state.title} onChange={this.handleNameChange}/>
                    <button type="submit">Save </button>
                    </form>

                </ul>
            </div>
        );
    }
}
 
function connectStateToComponentAsProps(state){
    return ({
        selectedFBprops: state.fclicked
    })
}

export default connect(connectStateToComponentAsProps)(FeedbackDescription)