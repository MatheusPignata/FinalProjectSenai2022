import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#250E42",
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
    },
    midTop: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        paddingBottom: '15%'
    },
    midBot: {
        width: "100%",
        height: "20%",
        backgroundColor: "#fff",
        marginTop: 50
    },
    inputs: {
        width: "60%",
        height: "4%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        margin: 20,
    },
    btn: {
        width: 150,
        height: 60,
    },
    gradient: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: "100%",
      
    },
    text: {
        color: "#fff",
    },
    inputdesc: {
        height: 100,
        width: 240,
        backgroundColor: "gray",
        padding: 0,
        borderRadius: 5,
    },
    caixaDescricao: {
        marginBottom: 25
    },
    caixaListFC: {
        width: "60%",
        height: "5%",
       
        margin: 20,
        color:'black'
    },
    inputFC: {
        width: "100%",
        height: "100%",
        color:'black',
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    caixaFC: {
        width:'100%',
        height:'100%',
        backgroundColor: '#8f5cd0',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    btnCaixaFC: {
        marginLeft: 5,
        marginRight: 5,
        borderBottomColor:'white',
        borderBottomWidth: 1,
        color:'white'
    },
    modal: {
        width: "70%",
        height: "50%",
        backgroundColor: '#ffff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: '15%'
    },
    modalShadow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%"
    },
    blurContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default styles;