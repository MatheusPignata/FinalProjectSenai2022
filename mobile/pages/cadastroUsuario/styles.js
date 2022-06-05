import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#250E42"
    },
    top: {
        width: "100%",
        height: "20%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    mid: {
        width: "100%",
        height: "80%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        alignItems:'center',
    },

    caixaTop: {
        width:'80%',
        flex:1,
        alignItems:'center'
    },
    
    
    inputs: {
        width: "60%",
        height: "4.2%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginTop: 35
    },
    btn: {
        width: "40%",
        height:50,
    },
    gradient: {
        width: "100%",
        height: 35,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      
    },
    checkbox:{
        width: "50%",
        marginTop:20,
        alignItems:'center',
        marginBottom: 25
    },
    text:{
        color: "#fff"
    },
    textStyle:{
        textDecorationLine: "none"
    }
})
export default styles;