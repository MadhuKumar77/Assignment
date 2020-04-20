import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity,Linking,Alert} from 'react-native';
import { Form, Item, Input, Icon, Button, Container, Toast, Content, ListItem, Body, CheckBox } from 'native-base';
import Loader from '../../Components/Loader'
import styles from './styles';
import { connect } from "react-redux";
import firebase from 'react-native-firebase'
import { getEmployeById,deleteEmployeByID } from '../../Actions/EmployeAction'

class EmployeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeID: ''
        };
    }

    componentDidUpdate(prevProp) {
        if(prevProp.employeDelete!=this.props.employeDelete){
            this.props.navigation.goBack()
        }
    }

    componentDidMount() {
        this.setState({ employeID: this.props.route.params.ID })
    }


    gotoMap(address) {
        Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + address);
    }

    deletEmploye = (id) => {
                    Alert.alert(  
                'Delete Employe',  
                'Are you sure?',  
                [  
                    {  
                        text: 'Cancel',  
                        onPress: () => console.log('Cancel Pressed'),  
                        style: 'cancel',  
                    },  
                    {text: 'OK', onPress: () =>  this.props.deleteEmployeByID(id)},  
                ]  
            );  
    }


    render() {
        const employe = this.props.Employe[0]
        return (
            <Container>
                {employe ? <Content padder>
                    <Loader loading={this.props.loading}/>
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <Image style={{ width: '100%', height: 200 }} source={{ uri: employe.Profileurl }}></Image>
                    </View>
                    <View style={{ backgroundColor: '#000', height: 30, alignItems: 'flex-start', padding: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: '900', color: '#fff' }}>Employe Details:</Text>
                    </View>
                    <View style={{ flex: 1, elevation: 2, paddingLeft: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: '800', color: '#000', paddingVertical: 5 }}>Name : {employe.Name}</Text>
                        <Text style={{ fontSize: 16, fontWeight: '800', color: '#000', paddingVertical: 5 }}>Email : {employe.Email}</Text>
                        <Text style={{ fontSize: 16, fontWeight: '800', color: '#000', paddingVertical: 5 }}>Phone Number : {employe.PhoneNumber}</Text>

                    </View>
                    <View>
                        <View style={{ backgroundColor: '#000', height: 30, alignItems: 'flex-start', padding: 5 }}>
                            <Text style={{ fontSize: 16, fontWeight: '900', color: '#fff' }}>Employe Address:</Text>
                        </View>
                        <View style={{ flex: 1, elevation: 2, paddingLeft: 5 }}>
                            <Text style={{ fontSize: 16, fontWeight: '800', color: '#000', paddingVertical: 5 }}>{employe.Address}</Text>
                        </View>
                        <View style={[styles.agendaInfoMap, { top: '60%' }]}>
                            <TouchableOpacity onPress={() => this.gotoMap(employe.Address)}>
                                <Icon type="MaterialIcons" name="place" style={styles.agendaInfoMapIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.buttonCont} >
                        <Button style={styles.subBtn} onPress={() => this.deletEmploye(employe.key)}>
                            <Text style={styles.subBtnText}>Delete</Text>
                        </Button>
                    </View>

                </Content> : null}
            </Container >
        );
    }
}
const mapStateToProps = (state, props) => ({
    Employe: getEmployeById(state.EmployeReducer.EmployeList, props.route.params.ID),
    loading:state.EmployeReducer.loading,
    employeDelete:state.EmployeReducer.employeDelete
});

const mapDispatchToProps = (dispatch) => ({
    deleteEmployeByID: (employeID) => { deleteEmployeByID(employeID, dispatch) }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeDetails);