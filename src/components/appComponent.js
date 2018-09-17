import React from 'react';
import FeedBackTitle from '../containers/feedbackDesc';
import FeedbackDescription from '../containers/feedbackTitle';

class AppComponent extends React.Component {
    render(){
        return (
            <div>
                My Component 
                <ul>
                    <FeedBackTitle />
                </ul>
                <hr />
                <FeedbackDescription />
            </div>    
        )
    }
}

export default AppComponent;