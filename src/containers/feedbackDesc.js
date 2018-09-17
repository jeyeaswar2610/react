import React from 'react'
import { connect } from 'react-redux';
import selectFeedback from '../actions/feebackAction';
import {bindActionCreators} from 'redux'

class FeedBackTitle extends React.Component {
    render() {
        return this.props.feedbacktitles.map((feed) => {
           return (<li key={feed.id} onClick={()=>{this.feedbackClicked(feed)}}>{feed.title}</li>)
        }
        )
    }
    feedbackClicked(fb){
        {this.props.selectFeedback(fb)}
    }

}


function connectStoreToComponentAsProps(state) {
    return {
        feedbacktitles: state.allFB
    }
}

function bindActionCreatorToCompoenentAsProps(dispatch){
    return bindActionCreators({selectFeedback:selectFeedback}, dispatch)

}

export default connect(connectStoreToComponentAsProps, bindActionCreatorToCompoenentAsProps) (FeedBackTitle)