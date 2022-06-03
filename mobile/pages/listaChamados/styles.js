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
        paddingTop: 50,
        alignItems: "center",
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
    },
    titleTable: {
        fontSize:15,
        fontWeight: "bold",
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
        margin:'auto'
    },
    text:{
        color: "#fff",

    },
    uptable: {
        flexDirection: "row",
        marginTop: 30,
        backgroundColor: "#8f5cd0"
    },
    lista: {
        width: 75,
        alignItems: "center",
    },
    lista2: {
        width: 150,
        alignItems: "center",
    },
    lista3: {
        width: 75,
        alignItems: "center",
    },
    lista4: {
        width: 75,
        alignItems: "center",
    },
    conteudoLista: {
        flexDirection: "row"
    },
    conteudo: {
        width: 75,
        alignItems: "center",
    },
    conteudo2: {
        width: 150,
        alignItems: "center",
    },
    conteudo3: {
        width: 75,
        alignItems: "center",
    },
    conteudo4: {
        width: 75,
        alignItems: "center",
    },
    tabela: {
        height: 350,
        borderWidth: 1,
        borderColor: "black",
        width: "95%"
    }
})

export default styles;