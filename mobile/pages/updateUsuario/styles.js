import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#250E42"
    },
    top: {
        width: "100%",
        height: "20%",
        flex: 1,
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
    inputBox: {
        width: "100%",
        height: '60%',
        marginTop: 5,
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    midBot: {
        width: "100%",
        height: "30%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#fff",
        marginBottom:'5%'
    },
    inputs: {
        width: "80%",
        height: "10%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        margin: 20,
    },
    btn: {
        width: 150,
        height: 60
    },
    gradient: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    btnConatiner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%"
    },
    text: {
        color: "#fff"
    },
    searchBar: {
        width: '70%',
        height: 40,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        marginTop: "5%",
        paddingLeft: 15,
        paddingRight: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
     
    },
    searchBox: {
        width: "100%",
        height: '25%',
        flex: 0,    
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    usuarios: {
        width: '70%',
        height: "55%",
        backgroundColor: '#8f5cd0',
        marginTop: 5,
        borderRadius: 10,
        borderColor: "black",
    },
    nomeUsuario: {
        fontSize:17,
        fontWeight: "bold",
        marginTop: '1.5%',
        borderColor: 'black',
        borderStyle:'solid',
        borderBottomWidth: 1,
        paddingLeft: 15,
        color:'white',
        borderColor:'white'
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
})
export default styles;