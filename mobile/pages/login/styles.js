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
        borderTopRightRadius: 100
    },
    midTop: {
        width: "100%",
        height: "100%",
    },
    inputs: {
        width: "60%",
        height: "4%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        margin: 20,
    },
    btn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        width: "100%",
        height: "40%",
    },
    gradient: {
        width: "90%",
        height: "30%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    ShowGradient: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff"
    },
    funcBtn:{
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    showBtn:{
        width: "90%",
        height: "10%",
    }
});

export default styles;