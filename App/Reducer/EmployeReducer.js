
import * as Action from '../Actions/index';

let initalState = {
    error: undefined,
    loading: true,
    EmployeList: [],
    employeAdd: false,
    employeDelete:false,
};

const EmployeReducer = (state = initalState, action) => {
    switch (action.type) {
        case Action.SHOWLOADING:
            return {
                ...state,
                loading: true
            };
        case Action.HIDELOADING:
            return {
                ...state,
                loading: false
            };
        case Action.EMPLOYEADDEDSUCESS:
            return {
                ...state,
                employeAdd: !state.employeAdd,
                loading: false
            };
        case Action.EMPLOYEDELETESUCESS:
            return {
                ...state,
                employeDelete: !state.employeDelete,
                loading: false
            };
        case Action.EMPLOYEELIST:
            return {
                ...state,
                EmployeList: action.payload,
                loading: false
            }
        default:
            return { ...state };
    }
};
export default EmployeReducer