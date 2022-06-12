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
    titleTable: {
        fontSize:15,
        fontWeight: "bold",
        color: 'white'
    },
    btn: {
        flex: 1,
        width: 150,
        borderRadius: 20,
        marginTop: 20
    },
    gradient: {
        width: "100%",
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 105
    },
    text:{
        color: "#fff"
    },
    uptable: {
        flexDirection: "row",
        marginTop: 30,
        backgroundColor: "#8f5cd0"
    },
    tabela: {
        height: "70%",
    },
    searchBar: {
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 10,
        
    },
    colunasTabela: {
        backgroundColor:'#fff'
    },
    headerTabela: {
        backgroundColor: '#8f5cd0',
        textDecorationColor:'',
        borderRadius: 25,
    },
})

export default styles;