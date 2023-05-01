import { StyleSheet } from "react-native";

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      },
    rowContainer:{
        backgroundColor: 'white',
        flexDirection:'row',
        flexWrap:"wrap",
    },
    headerText:{
        fontSize:30,
    },

    textInputSetup:{
        width:"80%",
        height: 40,
        borderWidth:1,
        borderRadius:20,
        paddingStart: 22,
        fontSize:20,
        marginTop:20
    },
    buttonSetup:{
        marginTop:20,
        width:"40%",
        height:40,
        borderWidth:1,
        backgroundColor:'lightgray',
        borderRadius: 20
    },
    buttonTextSetup:{
        textAlign:"center",
        height:40,
        fontSize:24,
    },
    buttonColorDown:{
        backgroundColor: "white"
    },
    buttonColorUp:{
        backgroundColor: "lightgray"
    },
    imageHeader:{
        width:"100%",
        height: 200,
        marginTop:20
    },
    imageBanner:{
        width: "100%",
        height: 200
    },
    buttonRight:{
        alignSelf:'flex-end',
        paddingEnd: 40,
        marginTop:10
    },
    buttonBottom:{
        marginTop:50
    },
    itemContainer:{
        width: 120,
        marginHorizontal:5,
        backgroundColor:'white',
        alignItems:'center',
    },
    itemImage:{
        width: 100,
        height:100,
        borderWidth:2,
        borderRadius: 100/2
    },
    itemText:{
        width:100,
        textAlign:"center"
    }
})

export default styles;