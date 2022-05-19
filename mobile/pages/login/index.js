import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Login({ navigation }) {
    const [codigo, setCodigo] = useState("");
    const [senha, setSenha] = useState("");

    const autenticar = () => {
        let data = {
            codigo: codigo,
            senha: senha,
        }
        fetch('http://10.87.207.19:3000/usu/logCad/false', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data),
        })
            .then(resp => { return resp.json() })
            .then(async data => {
                if (data.length > 0) {
                    navigation.navigate('Menu');
                } else {
                    ToastAndroid.show('usuario ou Senha Invalidos', ToastAndroid.SHORT);
                }
            })
    }

    const showFuncionario = () => {

    }

    const showSuusario = () => {
        
    }

    return (
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 50, color: "#8300E9" }}>OS</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.midTop}>
                        <TouchableOpacity style={styles.btn}>
                            <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                <Text>Opa1</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                <Text>Opa2</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};