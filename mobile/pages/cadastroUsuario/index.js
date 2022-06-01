import * as React from 'react';
import { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function CreateUsuario({ navigation }) {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");

    const cadastrar = () => {
        let data = {
            nome: nome,
            senha: senha,
            cpf: cpf,
            email: email,
            telefone: telefone,
            endereco: endereco
        }
        // fetch('http://10.87.207.19:8080/us/log/true', { 
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(resp => { return resp.json() })
        //     .then(data => {
        //         if (data.length > 0) {
        //             ToastAndroid.show('Cadastro realizado com sucesso', ToastAndroid.SHORT);
        //         } else {
        //             ToastAndroid.show('Não foi possível cadastrar um novo usuário', ToastAndroid.SHORT);
        //         }
        //     })
    }
    return (
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 40, color: "#8300E9", textAlign: "center", fontWeight: "bold" }}>REGISTRAR USUARIO</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.midTop}>
                        <Text style={{ marginTop: 20, color: '#8300E9', fontSize: 25 }}>Registro de usuario</Text>
                        <TextInput value={nome} onChangeText={setNome} style={styles.inputs} placeholder="Nome" />
                        <TextInput value={senha} onChangeText={setSenha} style={styles.inputs} secureTextEntry={true} placeholder="Senha" />
                        <TextInput value={cpf} onChangeText={setCpf} style={styles.inputs} placeholder="CPF" />
                        <TextInput value={email} onChangeText={setEmail} style={styles.inputs} placeholder="e-mail" />
                        <TextInput value={telefone} onChangeText={setTelefone} style={styles.inputs} placeholder="Telefone" />
                        <TextInput value={endereco} onChangeText={setEndereco} style={styles.inputs} placeholder="Endereço" />
                    </View>
                    <View style={styles.midBot}>
                        <View style={styles.btnConatiner}>
                            <TouchableOpacity style={styles.btn} onPress={() => { cadastrar() }}>
                                <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                    <Text style={styles.text}>CADASTRAR</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}