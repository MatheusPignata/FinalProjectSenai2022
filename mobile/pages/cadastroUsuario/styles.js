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
        alignItems: 'center',
    },

    caixaTop: {
        width: '80%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs: {
        width: "80%",
        height: "4.2%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginTop: 35,
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
    },
    checkbox: {
        width: "50%",
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 25
    },
    text: {
        color: "#fff"
    },
    textStyle: {
        textDecorationLine: "none"
    },
    inputBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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