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
        height: "70%",
        backgroundColor: "white",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    midTop: {
        width: "100%",
        height: "90%",
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-evenly',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    midBot: {
        width: "100%",
        height: "10%",
    },
    btn: {
        marginTop: 50,
        flex: 1,
        width: "80%",
        borderRadius: 20,
    },
    gradient: {
        width: "100%",
        height: "100%",
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