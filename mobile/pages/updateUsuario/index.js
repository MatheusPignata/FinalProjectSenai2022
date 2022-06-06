import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function UpdateUsuario({ navigation }) {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [id, setSearch] = useState("");

    const atualizar = () => {
        let data = {
            nome: nome,
            senha: senha,
            cpf: cpf,
            email: email,
            telefone: telefone,
            endereco: endereco
        };

        fetch('http://10.87.207.19:8080/listuser/' + id, {
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data),
        })
            .then(resp => { return resp })
            .then(async data => {
                if (data.status == 200) {
                    data = JSON.stringify(data)
                    setNome(data.nome)
                    setSenha(data.senha)
                    setCpf(data.cpf)
                    setEmail(data.email)
                    setTelefone(data.telefone)
                    setEndereco(data.endereco)
                } else {
                    ToastAndroid.show('Usuário não encontrado', ToastAndroid.SHORT);
                };
            });

        fetch('http://10.87.207.19:8080/alterar/' + id, {
            "method": "Put",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data),
        })
            .then(resp => { return resp })
            .then(async data => {
                if (data.status == 201) {
                    navigation.navigate('Menu');
                } else {
                    ToastAndroid.show('Erro ao atualizar usuário', ToastAndroid.SHORT);
                };
            });
    };

    return (
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 40, color: "#8300E9", fontWeight: "bold" }}>USUARIO</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.midTop}>
                        <View style={styles.searchBar}>
                            <TextInput value={id} onChangeText={setSearch} placeholder="Buscar..." style={{ width: "100%", height: "100%" }} />
                            <TouchableOpacity style={{ width: "100%", height: "90%" }}>
                                <Image style={{ width: "10%", height: "90%", marginTop: 4 }} source={require('../../assets/lupa.png')} />
                            </TouchableOpacity>
                       </View>
                        <TextInput value={nome} onChangeText={setNome} style={styles.inputs} placeholder="Nome" />
                        <TextInput value={senha} onChangeText={setSenha} style={styles.inputs} secureTextEntry={true} placeholder="Senha" />
                        <TextInput value={cpf} onChangeText={setCpf} style={styles.inputs} placeholder="CPF" />
                        <TextInput value={email} onChangeText={setEmail} style={styles.inputs} placeholder="e-mail" />
                        <TextInput value={telefone} onChangeText={setTelefone} style={styles.inputs} placeholder="Telefone" />
                        <TextInput value={endereco} onChangeText={setEndereco} style={styles.inputs} placeholder="Endereço" />
                    </View>
                    <View style={styles.midBot}>
                        <View style={styles.btnConatiner}>
                            <TouchableOpacity style={styles.btn} onPress={() => { atualizar() }}>
                                <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                    <Text style={styles.text}>SALVAR</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}>
                                <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                    <Text style={styles.text}>VOLTAR</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};