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
    },
    midBot: {
        width: "100%",
        height: "20%",
        backgroundColor: "#fff",
    },
    inputs: {
        width: "60%",
        height: "4%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginTop: 35,
    },
    btn: {
        width: "50%",
        height: "100%",
    },
    btnConatiner:{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: 'center'
    },
    gradient: {
        width: "100%",
        height: "50%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color: "#fff"
    },
})
export default styles;