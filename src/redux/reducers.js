import { combineReducers } from 'redux'

import { PAGE_ID_HOME, PAGE_ID_PROJECT_DETAIL, UPDATE_PAGE, UPDATE_PROJECT_ID } from "./actionTypes";

const initialState = {
	pageId: PAGE_ID_HOME,
	projectId: -1,
}

function reducer( state = initialState, payload ) {
	switch ( payload.type ) {
		case UPDATE_PAGE: {
			return { ...state, pageId: payload.pageId };
		}
		case UPDATE_PROJECT_ID: {
			return { ...state, projectId: payload.pageId };
		}
    default: {
      return { ...state }
    }
	}
}


export default combineReducers({
	reducer,
})
