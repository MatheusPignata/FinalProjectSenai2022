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
        justifyContent: "center"
    },
    mid: {
        width: "100%",
        height: 550,
        backgroundColor: "white",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60
    },
    midTop: {
        width: "100%",
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        marginTop: 20
    },
    btn: {
        flex: 1,
        width: "80%",
        marginTop: 4
    },
    gradient: {
        width: "100%",
        height: 50,
        borderRadius: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontWeight: "bold"
    },
    image: {
        height: 250,
        width: "70%"
    },
    scanQr: {
        width: 100,
        height: 100,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 10,

        
    },
    areaScan: {
        width: '100%',
        height: '85%',
    },
    containerScan: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        position:'absolute',
        backgroundColor:'white'
    },
    btnFecharScan: {
        width: 150,
        height: 60,
        alignItems:'center',
        justifyContent:'center',
       
        
    },
    gradientQr: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default styles;