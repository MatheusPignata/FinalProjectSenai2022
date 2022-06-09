import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Chamado({ navigation }) {
    const [produto, setProduto] = useState("");
    const [marca, setMarca] = useState("");
    const [serial, setSerial] = useState("");
    const [tecnico, setTecnico] = useState("");
    const [cor, setCor] = useState("");
    const [statusprod, setStatusprod] = useState("");
    const [orcamento, setOrcamento] = useState("");

    const cadastrarChamado = () => {
        let chamado = {
            produto: produto,
            marca: marca,
            serial: serial,
            tecnico: tecnico,
            cor: cor,
            statusprod: statusprod,
            orcamento: orcamento
        }

        fetch('http://192.168.0.102:8080/chamado', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
             },
                "body": JSON.stringify(chamado),
        })
        .then(resp => { return resp.json() })
        .then(async data => {
            if (data.length > 0) {
             navigation.navigate('');
        } else {
             ToastAndroid.show('Erro ao cadastrar chamado', ToastAndroid.SHORT);
            }
        })
    }

    return (
        <KeyboardAvoidingView behavior="height">
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 40, color: "#8300E9", fontWeight: "bold" }}>Chamado</Text>
            </View>
            <View style={styles.mid}>
                <ScrollView>
                    <View style={styles.midTop}>
                        <Text style={{ fontSize: 22, marginTop: 30, color: "#8300E9" }}>Criar Chamado</Text>
                        <TextInput value={produto} onChangeText={setProduto} style={styles.inputs} placeholder="Produto" />
                        <TextInput value={marca} onChangeText={setMarca} style={styles.inputs} placeholder="Marca" />
                        <TextInput value={serial} onChangeText={setSerial} style={styles.inputs} placeholder="Serial Number" />
                        <TextInput value={tecnico} onChangeText={setTecnico} style={styles.inputs} placeholder="Técnico Responsável" />
                        <TextInput value={cor} onChangeText={setCor} style={styles.inputs} placeholder="Cor" />
                        <TextInput value={statusprod} onChangeText={setStatusprod} style={styles.inputs} placeholder="Status" />
                        <TextInput value={orcamento} onChangeText={setOrcamento} style={styles.inputs}placeholder="Orcamento" />
                        <View style={styles.caixaDescricao}>
                            <TextInput style={styles.inputdesc} secureTextEntry={false} placeholder="Descrição do Problema"></TextInput>
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
                        
                    </View>
               </ScrollView>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
}