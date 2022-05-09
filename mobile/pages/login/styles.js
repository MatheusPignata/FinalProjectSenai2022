import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

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
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
        },
        midTop: {
            width: "100%",
            height: "60%",
            backgroundColor: "white",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
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
            flex: 1,
            width: "80%",
            borderRadius: 20,
        },
        gradient:{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }
    });

export default styles;