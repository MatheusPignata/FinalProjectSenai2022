import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Login({ navigation }) {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    const autenticarUser = () => {
        let data = {
            cpf: cpf,
            senha: senha
        }
        fetch('http://10.87.207.19:8080/login', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data),
        })
            .then(resp => { return resp.json() })
            .then(async data => {
                if (data.id > 0) {
                    if (data.cargo == "F") {
                        navigation.navigate("Menu");
                    } else {
                        navigation.navigate("Menu")
                    }
                } else{
                    ToastAndroid.show('CPF ou senha inválidos', ToastAndroid.SHORT);
                }
            })
    }

    return (
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 50, color: "#8300E9" }}>OS</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.midTop}>
                        <Text style={{ fontSize: 40, marginTop: 50, color: "#8300E9", fontWeight: "bold" }}>ENTRAR</Text>
                        <TextInput value={cpf} onChangeText={setCpf} style={styles.inputs} placeholder="CPF" />
                        <TextInput value={senha} onChangeText={setSenha} style={styles.inputs} secureTextEntry={true} placeholder="Senha" />
                        <TouchableOpacity onPress={() => { autenticarUser() }} style={styles.btn} >
                            <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                <Text style={styles.text}>ENTRAR</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};