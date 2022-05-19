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
    btn: {
        flex: 1,
        width: 150,
        borderRadius: 20,
        marginTop: 460
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
    }
})

export default styles;