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
        alignItems:'center'
    },
    caixaImageLogo: {
        width: 75,
        height: 75,
        backgroundColor: "#250E42",
        justifyContent:'center',
        alignItems:'center',
        marginTop: 5,
        borderRadius: 30
    },
    textTitulo:{
        color: "#8300E9", 
        fontWeight: "bold" ,
        fontSize:22
    },
    text: {
        color: "#fff",
    },
    cardChamado: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
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
        marginBottom: 25,
        marginTop: 15
    },
    inputs: {
        width: "60%",
        height: "4%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        margin: 20,
        color:'black'
    },
    caixaDescricao: {
        marginBottom: 25
    },
    inputdesc: {
        height: 100,
        width: 240,
        backgroundColor: "gray",
        paddingLeft:5,
        borderRadius: 5,
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
})

export default styles;