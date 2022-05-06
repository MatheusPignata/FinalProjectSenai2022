import { StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            backgroundColor: "#37333C",
        },
        top: {
            width: "100%",
            height: "35%",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        mid: {
            width: "100%",
            height: "65%",
            backgroundColor: "white",
            borderTopLeftRadius: 75,
            borderTopRightRadius: 75,
        },
        midTop: {
            width: "100%",
            height: "60%",
            backgroundColor: "white",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            borderTopLeftRadius: 75,
            borderTopRightRadius: 75,
        },
        midBot: {
            width: "100%",
            height: "40%",
        },
        inputs: {
            width: "60%",
            height: "4%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10,
            margin: 20,
        },
        btn:{
            marginTop: 50,
            borderWidth: 1,
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            borderRadius: 20,
        }
    });

export default styles;