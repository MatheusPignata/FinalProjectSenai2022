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
        height: '45%',
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
        height: "4%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        margin: 20
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
        width: "60%",
        height: 35,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        marginTop: "5%",
        
        paddingLeft: 15,
        paddingRight: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#C4C4C4"
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
        marginTop: 5
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
    }
})
export default styles;