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
        alignItems: "center",
        justifyContent: "center"
    },
    mid: {
        width: "100%",
        height: "70%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    midTop: {
        width: "100%",
        height: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        flex: 1,
    },
    inputs: {
        width: "60%",
        height: "4%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        margin: 20,
    },
    btn: {
        marginLeft: 20,
        padding: 0,
        width: "90%",
    },
    gradient: {
        width: "100%",
        height: "40%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff"
    }
});

export default styles;