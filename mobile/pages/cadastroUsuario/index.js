import * as React from 'react';
import { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ToastAndroid, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import BouncyCheckboxGroup, { ICheckboxButton } from "react-native-bouncy-checkbox-group";

export default function CreateUsuario({ navigation }) {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cargo, setCargo] = useState("");
    const [modalVisible, setModalVisible] = useState(false)
    const staticData = [
        {
            id: 1,
            value: "F",
            text: 'Funcionário',
            fillColor: '#4630AB',
            textStyle: styles.textStyle
        },
        {
            id: 2,
            value: "C",
            text: 'Cliente',
            fillColor: '#4630AB',
            textStyle: styles.textStyle
        }
    ];

    const cadastrar = () => {
        setModalVisible(true)
        let data = {
            nome: nome,
            senha: senha,
            cpf: cpf,
            email: email,
            telefone: telefone,
            endereco: endereco,
            cargo: cargo
        }
        if (data.senha == "" || data.nome == "" || data.cpf == "" || data.email == "" || data.telefone == "" || data.endereco == "" || data.cargo == "") {
            ToastAndroid.show("Preencha todos os campos", ToastAndroid.SHORT);
        } else {
            fetch('http://10.87.207.19:8080/cadastrar', {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
                .then(resp => { return resp })
                .then(data => {
                    if (data.status == 200) {
                        setModalVisible(true)
                    } else {
                        ToastAndroid.show('Não foi possível cadastrar um novo usuário', ToastAndroid.SHORT);
                    }
                })
        }

    }
    return (
        <View style={styles.container}>
            <Modal
                style={styles.modalShadow}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modal}>
                    <Text style={{ fontSize: 18 }}>Cadastro realizado com sucesso</Text>
                    <Image
                        source={require('../assets/feito.png')}
                    >
                    </Image>
                    <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(false) }}>
                        <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>concluido</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.top}>
                <Text style={{ fontSize: 40, color: "#8300E9", textAlign: "center", fontWeight: "bold" }}>REGISTRAR USUARIO</Text>
            </View>
            <View style={styles.mid}>
                <ScrollView>
                    <Text style={{ alignSelf: 'center', marginTop: 20, color: '#8300E9', fontSize: 25 }}>Registro de usuario</Text>
                    <View style={styles.inputBox}>
                        <TextInput value={nome} onChangeText={setNome} style={styles.inputs} placeholder="Nome" />
                        <TextInput value={senha} onChangeText={setSenha} style={styles.inputs} secureTextEntry={true} placeholder="Senha" />
                        <TextInput value={cpf} onChangeText={setCpf} style={styles.inputs} placeholder="CPF" />
                        <TextInput value={email} onChangeText={setEmail} style={styles.inputs} placeholder="e-mail" />
                        <TextInput value={telefone} onChangeText={setTelefone} style={styles.inputs} placeholder="Telefone" />
                        <TextInput value={endereco} onChangeText={setEndereco} style={styles.inputs} placeholder="Endereço" />
                        <View style={styles.checkbox}>
                            <BouncyCheckboxGroup data={staticData} style={{ flexDirection: "column" }}
                                onChange={(cargo = staticData) => {
                                    setCargo(cargo.value)
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={() => { cadastrar() }}>
                            <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                <Text style={styles.text}>CADASTRAR</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}>
                            <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                <Text style={styles.text}>VOLTAR</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}