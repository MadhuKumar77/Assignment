import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Item, Input, Text, Icon } from 'native-base';

const InputComponent = (props) => {
    const {
        name,
        placeholder,
        Error,
        onChangeText,
        value,
        secureTextEntry,
        iconType,
        keyboardType,
        iconName,
        editable,
        ...attributes
      } = props;
      handleChangeText=(event)=>{
       onChangeText(event);
      }
      return (
         <View>
              <Item style={styles.inputItem}>
                <Text style={styles.inputLabel}>{name}</Text>  
                <Input style={styles.inputInner}
                    onChangeText={this.handleChangeText.bind(this)}
                    placeholder={placeholder}
                    placeholderTextColor="#D3D3D3" 
                    value={value}
                    editable={editable}
                    keyboardType={keyboardType}   
                    secureTextEntry={secureTextEntry}/>
            </Item>
            {  Error ?  <Text style={styles.errorLabel}>{Error}</Text> : null } 
         </View>
      )
   }

export default InputComponent;
const styles = StyleSheet.create({
    errorLabel: {
        color: '#ff0000',
        paddingLeft:10,
        paddingRight:10,
        fontSize: 14,
    },
    inputItem:{
        position:'relative',
        margin:20,
        borderBottomWidth:0
    },
    inputLabel:{
        position:'absolute',
        top:-10,
        zIndex:10,
        backgroundColor:'#fff',
        color:'#000',
        left:15,
        paddingHorizontal:10
    },
    inputInner:{
        borderWidth:3,
        borderStyle:'solid',
        borderColor:'#000',
        borderRadius:3,
        color:'#000',
        height:'auto',
        paddingLeft:20,
        paddingRight:10,
        paddingVertical:15,
    },
})
