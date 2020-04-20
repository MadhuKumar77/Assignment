import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Form, Item, Input, Icon, Button, Container, Toast, Content, ListItem, Body, CheckBox } from 'native-base';
import InputComponent from '../../Components/Input';
import Loader from '../../Components/Loader'
import styles from './styles';
import { connect } from "react-redux";
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet'
import { addNewEmployee } from '../../Actions/EmployeAction'
import Geolocation from '@react-native-community/geolocation';
import { getCurrentUserAddress } from '../../Helpers/Utils'
import { MapComponent } from '../../Components/MapComponent'

class AddEmploye extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            phone: '',
            Address: '',
            options: ['Camera', 'Gallery', 'Cancel'],
            imageUri: '',
            region: ''
        };
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }


    componentDidUpdate(prevProp) {
        if (prevProp.employeAdd != this.props.employeAdd) {
            this.props.navigation.goBack()
        }
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                this.setState({ region: position.coords })
                this.getAddressByLatLong(position.coords.latitude, position.coords.longitude)
            },
            error => console.log(error),
            { enableHighAccuracy: true }

        );

    }

    getAddressByLatLong = (lat, long) => {
        getCurrentUserAddress(lat, long).then(response => {
            this.setState({ Address: response.results[0].formatted_address })
        })
    }

    changePin = (adres) => {
        this.getAddressByLatLong(adres.latitude, adres.longitude)
    }

    openPickerM(index) {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        if (index === 0) {
            ImagePicker.launchCamera(options, (response) => {
                this.setState({ imageUri: 'file://' + response.path })
            })
        } else if (index === 1) {
            ImagePicker.launchImageLibrary(options, (response) => {
                this.setState({ imageUri: 'file://' + response.path })
            });
        }
    }

    submitCustomer = () => {
        var reg = /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ // eslint-disable-line no-useless-escape
        if (this.state.Name && this.state.Email && this.state.phone && this.state.Address) {
            if (reg.test(this.state.Email)) {
                this.state.imageUri ? this.props.addNewEmployee(this.state) : Toast.show({ text: 'Please Select Image', duration: 3000 })
            } else {
                Toast.show({ text: 'Please Enter Valid Email', duration: 3000 })
            }
        } else {
            Toast.show({ text: 'Please Enter All Fields', duration: 3000 })
        }
    }


    render() {
        return (
            <Container style={styles.container}>
                <Loader loading={this.props.loading} />
                <Content>
                    <Animatable.View animation={"fadeInRight"}>
                        {this.state.region.latitude && this.state.region.longitude ? (
                            <MapComponent state={this.state} setAddress={this.setAddress} changePin={this.changePin} />
                        ) : null}
                        <TouchableOpacity onPress={() => this.showActionSheet()}>
                            <View style={styles.header}>
                                {this.state.imageUri ?
                                    <Image style={styles.avatar} source={{ uri: this.state.imageUri }} /> :
                                    <Image style={styles.avatar} source={require('../../Images/default.png')} />}
                            </View>
                        </TouchableOpacity>

                        <Form style={styles.formAlign}>

                            <InputComponent
                                name="Name"
                                onChangeText={Name => this.setState({ Name })}
                                value={this.state.Name}
                                secureTextEntry={false}
                            />

                            <InputComponent
                                name="Email"
                                onChangeText={Email => this.setState({ Email })}
                                value={this.state.Email}
                                secureTextEntry={false}
                                keyboardType={'email-address'}
                            />

                            <InputComponent
                                name="Phone Number"
                                onChangeText={phone => this.setState({ phone })}
                                value={this.state.phone}
                                secureTextEntry={false}
                                keyboardType={'phone-pad'}
                            />

                            <InputComponent
                                name="Address"
                                onChangeText={Address => this.setState({ Address })}
                                value={this.state.Address}
                                secureTextEntry={false}
                            />

                            <View style={styles.buttonCont} >
                                <Button style={styles.subBtn} onPress={() => this.submitCustomer()}>
                                    <Text style={styles.subBtnText}>Submit</Text>
                                </Button>
                            </View>

                        </Form>
                    </Animatable.View>
                </Content>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'Upload Profile Pic'}
                    options={this.state.options}
                    cancelButtonIndex={this.state.cancelIndex}
                    destructiveButtonIndex={this.state.destructiveIndex}
                    onPress={(index) => { this.openPickerM(index) }}
                />
            </Container >
        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.EmployeReducer.loading,
    employeAdd: state.EmployeReducer.employeAdd
});

const mapDispatchToProps = (dispatch) => ({
    addNewEmployee: (stateValues) => { addNewEmployee(stateValues, dispatch) }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEmploye);