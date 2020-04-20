const React = require('react-native');

const { StyleSheet } = React;

export default{
    
    formAlign:{
        paddingBottom:60,
    },
    buttonCont:{
        top:20,
        alignItems:'center',
        bottom:10,
    },
    subBtn:{
        maxWidth:230,
        height:56,
        padding:20,
        textAlign:'center',
        elevation:0,
        backgroundColor:'#000',
        borderRadius:3
    },
    subBtnText:{
        textAlign:'center',
        flex:1,
        color:'#5190fc',
        fontWeight:'700',
        fontSize:16
    }, 
    header:{
        backgroundColor: "#3378B1",
        height:100,
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 55,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:5,
        alignSelf:'center',
        position: 'absolute',
        marginTop:10
      },
      fab: { 
        position: 'absolute', 
        width: 56, 
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 20, 
        backgroundColor: '#03A9F4', 
        borderRadius: 30, 
        elevation: 8 
        }, 
        fabIcon: { 
          fontSize: 40, 
          color: 'white' 
        },
        agendaInfoMap: { 
        position:'absolute', 
        right:0,
        top:'40%',
        backgroundColor:'#3378B1', 
        width:35, 
        height:35, 
        borderRadius:50, 
        paddingTop:5 
    },
    agendaInfoMapIcon:{
        textAlign:'center', 
        color: '#FFFFFF' 
    },
};
