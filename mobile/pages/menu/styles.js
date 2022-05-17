import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#37333C",
    },
    top: {
        width: "100%",
        height: "30%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    mid: {
        width: "100%",
        height: "75%",
        backgroundColor: "white",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    midTop: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    btn: {
        flex: 1,
        width: "70%",
        borderRadius: 20,
        marginTop: 20,
    },
    gradient: {
        width: "100%",
        height: "60%",
        borderRadius: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff"
    }
});

export default styles;