import { combineReducers } from 'redux';

import allFeedback from './feedback-reducers';
import userFeedback from './user-reducers';
import feedbackClicked from './feedback-clicked';

const allReducers = combineReducers({
    allFB: allFeedback,
    allU: userFeedback,
    fclicked: feedbackClicked
})

export default allReducers