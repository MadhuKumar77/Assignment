import { Dimensions, Platform, Appearance,StyleSheet } from 'react-native'

const deviceSize = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    pageBG: {
        backgroundColor:'#F8FAFB',
    },
    textInput: {
        backgroundColor: '#ffffff',
        padding: 10,
        height: 40,
        margin: 10,
        borderRadius: 5
    },
     noItemsFounf:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop:100,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        margin: 10,
        borderRadius: 5,
        padding: 3,
        backgroundColor: '#88cc88'
    },
    buttonTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    loginBox: {
        margin: 10
    },
    imageBox: {
        alignItems: 'center',
        marginTop: 20
    },
    image: {
        width: 120,
        height: 120
    },
    scrollView: {
        backgroundColor: '#2299ec'
    },
    mb15:{
        marginBottom:15,
    },
    pr60:{
        paddingRight:60,
    },
    headerBodyTitle:{
        color:'#fff',
        marginLeft:5
    },
    headerIcons:{
        color:'#fff',
        fontSize:24,
    },
    header: {
        backgroundColor: '#3378B1',
        justifyContent: 'center',
        alignItems: 'center',
        height:75
    },
    headerImg: {
        position:'absolute',
        top:Platform.OS === 'ios' ? -10: 0,
        right:40,
        zIndex:1,
        width: 106,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerCorners:{
        flex: 1,
        position:'relative', 
        zIndex:5
    },
    headerBody:{
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative', 
        zIndex:5
    },
    
    segmentImgLeft: {
        position:'absolute',
        top:10,
        left:0,
        zIndex:1,
        width: 94,
        height:120,
    },
    segmentImgRight: {
        position:'absolute',
        top:10,
        right:0,
        zIndex:1,
        width: 64,
        height:120,
    }, 

    tabHeading:{
        backgroundColor:'transparent',
        overflow:'hidden'
    },
    tabHeadingText:{
        position:'relative',
        zIndex:5,
        color:'#fff',
    },

    agendaInfo: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 15,
        marginRight: 10,
        marginTop: 17,
    },
    agendaInfoTitle: {
        fontSize:16,
        lineHeight:22,
        color: '#505F79',
    },
    agendaInfoTitleSub:{
        fontSize:16,
        color:'#8993A4',
        paddingRight:5,
    },
    agendaInfoTime:{
        flexDirection:'row',
        marginTop:5 
    },
    agendaInfoTimeText:{
        fontSize:14,
        color:'#3378B1',
    },
    agendaInfoTimeTextFrom:{
        fontSize:14,
        color:'#8993A4',
        paddingRight:5,
    },
    agendaInfoTimeTextTo:{
        fontSize:14,
        color:'#8993A4',
        paddingHorizontal:5,
    },
    agendaInfoTimeIcon: {
        fontSize:18,
        paddingTop:0, 
        marginTop:-1,
        paddingRight:5,
        color:'#C1C7D0',
    },
    agendaInfoButtonHold:{
        borderTopWidth:1,
        borderTopColor:'#DFE1E5',
        marginTop:15,
        paddingTop:15,
        marginHorizontal:-15,
        paddingHorizontal:15
    },
    agendaInfoButtonShift:{
        paddingHorizontal:10,
        backgroundColor:'#5FDAA7',
        elevation:0,
    },
    agendaInfoButtonTimeOff:{
        paddingHorizontal:10,
        backgroundColor:'#E84F2A',
        elevation:0,
    },
    agendaInfoButtonText:{
    },

    agendaInfoDetails: { 
        borderTopWidth:1,
        borderTopColor:'#DFE1E5',
        marginTop:15,
        paddingTop:15,
    },
    agendaInfoDetailsHeading:{
        fontSize:16,
        color:'#3378B1',
    },
    agendaInfoDetailsAddress: {
        color: '#293B6D',
        fontSize:16,
    },
    agendaInfoMap: { 
        position:'absolute', 
        right:0,
        top:'30%',
        backgroundColor:'#48D1E8', 
        width:60, 
        height:60, 
        borderRadius:50, 
        paddingTop:15 
    },
    agendaInfoMapIcon:{
        textAlign:'center', 
        color: '#FFFFFF' 
    },
    agendaInfoDetailsButton:{
        margin:20,
        marginBottom:10,
        paddingHorizontal:10,
        paddingTop:15,
        paddingBottom:15,
        height:'auto',
        borderRadius:5,
        backgroundColor:'#3378B1',
        elevation:0,
    },
    agendaInfoDetailsButtonText:{
    },
    agendaInfoDetailsButtonIcon:{
        marginLeft:0, 
        marginRight:0,
    },

    emptyDate: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
    },
    emptyDateText:{
        color: '#293B6D',
    },

    availableHold:{
        backgroundColor: '#F9FAFA',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:30,
    },
    availableHoldText:{
        textAlign:'center',
        lineHeight:22
    },


    shiftList:{
        backgroundColor:'#fff',
        borderRadius:3,
        marginBottom:5,
    },
    shiftTitle: {
        fontSize:15,
        lineHeight:22,
        color: '#505F79',
        marginBottom:5,
    },
    shiftTitleDivide:{
        color:'#C1C7D0',
    },
    shiftDate:{
        fontSize:12,
        color:'#8993A4',
        lineHeight:22,
    },
    shiftAddress:{
        fontSize:13,
        color:'#8993A4',
        paddingRight:5,
    },

    shiftButton:{
        elevation:0,
        minWidth:90,
        paddingHorizontal:10,
        textAlign:'center',
        justifyContent:'center',
        marginTop:10,
    },
    shiftOpen:{
        backgroundColor:'#49D1E8',
    },
    shiftPending:{
        backgroundColor:'#FFBB01',
    },
    shiftApproved:{
        backgroundColor:'#5DD7A5',
    },
    shiftDeclined:{
        backgroundColor:'#F24922',
    },
    shiftButtonText:{
        paddingLeft:5,
        paddingRight:5,
    },
    shiftButtonIcon:{
        fontSize:16,
        marginLeft:0,
        marginRight:0,
    },
    tealColorText:{
        color:'#3378B1',
    },
    navigationIcon:{
        height:35, 
        paddingVertical:8, 
        textAlign:'center'
    },
    navigationLabel:{
        textAlign:'center',  
        fontSize:11, 
        marginBottom:4, 
    },
    navigationRequestIcon:{ 
        position: 'absolute', 
        right: 2, 
        top: 3, 
        width: 8, 
        height: 8, 
        borderRadius: 50, 
        backgroundColor: '#f24A23', 
        zIndex: 11 
    },
    messageCountIcon:{
        left: 30, 
        right:'auto',
        paddingLeft:5,
        paddingRight:5,
        width: 'auto',
        minWidth:16,
        height: 16, 
        textAlign:'center',
    },
     messageCountText:{
        top:1,
        textAlign:'center',
        color:'#fff',
        fontSize:11,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    topLeft: {
        width: deviceSize.width * 0.3,
        height: 20,
        borderRadius: 10
    },
    bottom: {
        alignSelf: 'center',
        borderRadius: 10,
        width: deviceSize.width * 0.9,
        height: 20,
    }
});