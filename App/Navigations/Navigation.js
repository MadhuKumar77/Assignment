import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeList from '../Screens/Employee/EmployeList'
import addEmploye from '../Screens/Employee/AddEmploye'
import EmployeDetails from '../Screens/Employee/EmployeDetails'

const Stack = createStackNavigator();

export const AuthContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EmployeList" >
                <Stack.Screen name="EmployeList" component={EmployeList} options={{ title: "Employe List" }} />
                <Stack.Screen name="addEmploye" component={addEmploye} options={{ title: "Add Employe" }} />
                <Stack.Screen name="EmployeDetails" component={EmployeDetails} options={{ title: "Employe Details" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



