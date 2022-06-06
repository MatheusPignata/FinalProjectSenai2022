import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#250E42"
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
        borderTopRightRadius: 100
    },
    midTop: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
    },
    midBot: {
        width: "100%",
        height: "20%",
        backgroundColor: "#fff"
    },
    inputs: {
        width: "80%",
        height: "4%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        margin: 20
    },
    btn: {
        width: 150,
        height: 60
    },
    gradient: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    btnConatiner:{
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%"
    },
    text:{
        color: "#fff"
    },
    searchBar:{
        width: "80%",
        height: "10%",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#C4C4C4"
    }
})
export default styles;