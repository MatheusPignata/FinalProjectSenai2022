import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#250E42"
    },
    top: {
        width: "100%",
        height: "30%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    mid: {
        width: "100%",
        height: 550,
        backgroundColor: "white",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    midTop: {
        width: "100%",
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        marginTop: 40
    },
    btn: {
        flex: 1,
        width: "80%",
        marginTop: 5,
    },
    gradient: {
        width: "85%",
        height: 50,
        borderRadius: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto"
    },
    text: {
        color: "#fff",
        fontWeight: "bold"
    },
    image: {
        height: 250,
        width: "70%"
    }
});

export default styles;