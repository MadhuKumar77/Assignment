import React, { Component } from 'react';
import { SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, Fab, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import styles from './styles';
import { getAllEmployes } from '../../Actions/EmployeAction'
import { connect } from "react-redux";
import {MainLoader} from '../../Components/Simmer'

class EmployeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    renderData = (item) => {
        return (
            <ListItem button onPress={() => this.props.navigation.navigate('EmployeDetails', { ID: item.key })} thumbnail>
                <Left>
                    <Thumbnail square style={{height:50,width:50,borderRadius:100}} source={{ uri: item.Profileurl }} />
                </Left>
                <Body>
                    <Text>{item.Name}</Text>
                    <Text note numberOfLines={1}>{item.Email}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                {this.props.loading?<MainLoader/>:null}
                <FlatList
                    data={this.props.EmployeList}
                    renderItem={({ item }) => this.renderData(item)}
                    keyExtractor={item => item.key}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('addEmploye')} style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.EmployeReducer.loading,
    EmployeList: state.EmployeReducer.EmployeList,
});

const mapDispatchToProps = (dispatch) => ({
    getAllEmployes: getAllEmployes(dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeList);