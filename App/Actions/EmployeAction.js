import firebase from 'react-native-firebase';
import * as Actions from '../Actions/index';

export const getAllEmployes = (dispatch) => {
    let List = [];
    dispatch(showLoadingState());
    firebase.firestore().collection('Employee').onSnapshot(function (snapshot) {
        List = [];
        snapshot.forEach(function (doc) {
            var item = doc.data();
            item.key = doc.id;
            List.push(item);
        })
        dispatch(dispatchEmployeList(List));
    })
}

const dispatchEmployeList = user => ({
    type: Actions.EMPLOYEELIST,
    payload: user,
});

const showLoadingState = () => ({
    type: Actions.SHOWLOADING
  });



export const addNewEmployee = (values, dispatch) => {
    dispatch(showLoadingState());
    const imageRef = firebase.storage().ref('profile/' + new Date())
    let mime = 'image/jpg'
    imageRef.put(values.imageUri, { contentType: mime })
        .then((response) => {
            firebase.firestore().collection('Employee').add({
                'Email': values.Email,
                'Address': values.Address,
                'Name': values.Name,
                'PhoneNumber':values.phone,
                'Profileurl':response.downloadURL
            }).then(result=>{
                dispatch({
                    type:Actions.EMPLOYEADDEDSUCESS
                })
            })
        })
}

export const getEmployeById=(employesList,Id)=>{
    return employesList.filter(values=>{
        return values.key==Id
    })
}

export const deleteEmployeByID=(ID,dispatch)=>{
    dispatch(showLoadingState());
    firebase.firestore().collection('Employee').doc(ID).delete().then(result=>{
        dispatch({
            type:Actions.EMPLOYEDELETESUCESS
        })
    })
}