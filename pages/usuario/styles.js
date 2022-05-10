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
        backgroundColor: "#fff",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    midTop: {
        width: "100%",
        height: "80%",
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
        margin: 20,
    },
    btn: {
        width: "50%",
        height: "100%",
    },
    btnConatiner:{
        width: "100%",
        height: "100%",
        flexDirection: "row",
    },
    gradient: {
        width: "70%",
        height: "50%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto"
    },
    text:{
        color: "#fff"
    },
    searchBar:{
        width: "70%",
        height: "10%",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10,
        paddingLeft: 10,
        paddingTop: 5,
    }
})

export default styles;