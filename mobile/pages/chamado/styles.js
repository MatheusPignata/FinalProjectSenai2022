import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#37333C",
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
        width: "40%",
        height: "200%",
        paddingLeft: 5
    },
    btnConatiner:{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        paddingLeft: 50,
    },
    gradient: {
        width: "100%",
        height: "20%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        width: 80
    },
    inputdesc: {
        height: 100,
        width: 240,
        backgroundColor: "gray",
        padding: 0,
        borderRadius: 5,
    }
});

export default styles;