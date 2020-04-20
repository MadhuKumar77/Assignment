import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import EmployeReducer from './EmployeReducer'

const AppReducer=combineReducers({
    EmployeReducer
})

const rootReducers = (state, action) => {
    return AppReducer(state, action);
}

export default createStore(rootReducers)