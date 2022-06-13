import * as React from 'react';
import { TouchableOpacity, View, Text, KeyboardAvoidingView, Image, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import styles from './styles';
import logo from '../assets/chama.png';
import can from '../assets/transform.png';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Menu({ navigation }) {
    // QR CODE
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modalScan, setModalScan] = useState(false);


    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        
        if(data != '' && data != null) {
            setModalScan(false)
            navigation.navigate("ChamadoUnico", data)
        }
    };

    if (hasPermission === null) {
        return <Text>É necessario permissão para utilizar a camera!</Text>;
    }
    if (hasPermission === false) {
        return <Text>Camera não encontrada!</Text>;
    }


    return (
        <KeyboardAvoidingView>
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 50, color: "#8300E9" }}>MENU</Text>
            </View>
            <View style={styles.mid}>
                <View style={styles.midTop}>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('CreateUsuario') }}>
                        <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>REGISTRAR USUARIO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('UpdateUsuario') }}>
                        <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>EDITAR USUARIO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Chamado') }}>
                        <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>CRIAR CHAMADO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('ListaChamado') }}>
                        <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>LOCALIZAR CHAMADO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scanQr} onPress={() => setModalScan(true)}>
                        <LinearGradient style={styles.gradientQr} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Image source={can} style={{ width:55, height: 55}}/>
                            <Text style={styles.text}>Scan QR</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                   
                    
                </View>
                {
                    modalScan ? 
                    <View style={styles.containerScan}>
                    <BarCodeScanner
                        onBarCodeScanned={handleBarCodeScanned}
                        style={styles.areaScan}
                    />
                     <TouchableOpacity style={styles.btnFecharScan} onPress={() => setModalScan(false)}>
                     <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.text}>Fechar Can</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                :
                    <View>
                    </View>
                }
                
            </View>
            
        </View>
        </KeyboardAvoidingView>
    )
}