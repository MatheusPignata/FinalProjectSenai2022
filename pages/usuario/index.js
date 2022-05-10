import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Usuario({ navigation }) {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");

    const atualizar = () => {
        let attUsuario = {
            nome: nome,
            senha: senha,
            cpf: cpf,
            email: email,
            telefone: telefone,
            endereco: endereco
        }
    }
    return (
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 50, color: "#8300E9" }}>USUARIO</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.midTop}>
                        <View style={styles.searchBar}>
                            <TextInput onChangeText={setNome} placeholder="Buscar..." />
                            <Image source={require('../../assets/lupa.png')} />
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
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}>
                                <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                    <Text style={styles.text}>VOLTAR</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                    <Text style={styles.text}>SALVAR</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}