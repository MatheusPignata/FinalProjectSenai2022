import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';


export default function Login({ navigation }) {
    const url = "http://10.87.207.19:300/";
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [codigo, setCodigo] = useState("");

    const loginUser = () => {
        let data = {
            codigo: codigo
        }
        fetch(url + 'usu/logCad/false', {
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
                    ToastAndroid.show('Codigo inválido', ToastAndroid.SHORT);
                }
            })
    }

    const loginFunc = () => {
        let data = {
            cpf: cpf,
            senha: senha
        }
        fetch(url + 'usu/logCad/false', {
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
                    ToastAndroid.show('CPF ou senha inválido', ToastAndroid.SHORT);
                }
            })
    }

    const [shouldShowFunc, setShouldShowFunc] = useState(false);
    const [shouldShowUser, setShouldShowUser] = useState(false);
    const [shouldShowBtn, setShouldShowBtn] = useState(true);

    const showFunc = () => {
        setShouldShowFunc(!shouldShowFunc);
        setShouldShowBtn(!shouldShowBtn);
    }
    const showUser = () => {
        setShouldShowUser(!shouldShowUser);
        setShouldShowBtn(!shouldShowBtn);
    }

    return (
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 50, color: "#8300E9" }}>OS</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.midTop}>
                        {shouldShowBtn ?
                            (
                                <TouchableOpacity onPress={() => { showFunc() }} style={styles.btn}>
                                    <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                        <Text style={styles.text}>FUNCIONARIO</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            ) : null}
                        {shouldShowBtn ?
                            (
                                <TouchableOpacity onPress={() => showUser()} style={styles.btn}>
                                    <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                        <Text style={styles.text}>USUARIO</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            ) : null}
                        {shouldShowFunc ?
                            (
                                <View style={styles.funcBtn}>
                                    <TextInput value={cpf} onChangeText={setCpf} style={styles.inputs} placeholder="CPF" />
                                    <TextInput value={senha} onChangeText={setSenha} style={styles.inputs} placeholder="senha" />
                                    <TouchableOpacity onPress={() => loginFunc()} style={styles.showBtn}>
                                        <LinearGradient style={styles.ShowGradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                            <Text style={styles.text}>ENTRAR</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 20 }} onPress={() => showFunc()}>VOLTAR</Text>
                                </View>
                            ) : null}
                        {shouldShowUser ?
                            (
                                <View style={styles.funcBtn}>
                                    <TextInput value={codigo} onChangeText={setCodigo} style={styles.inputs} placeholder="Código" />
                                    <TouchableOpacity onPress={() => loginUser()} style={styles.showBtn}>
                                        <LinearGradient style={styles.ShowGradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                            <Text style={styles.text}>ENTRAR</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 20 }} onPress={() => showUser()}>VOLTAR</Text>
                                </View>
                            ) : null}
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};