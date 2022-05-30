import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function LocalizarChamado({ navigation }) {
    const [produto, setProduto] = useState("");
    const [marca, setMarca] = useState("");
    const [serial, setSerial] = useState("");
    const [tecnico, setTecnico] = useState("");
    const [cor, setCor] = useState("");
    const [statusprod, setStatusprod] = useState("");
    const [orcamento, setOrcamento] = useState("");

    const atualizarChamado = () => {
        let attchamado = {
            produto: produto,
            marca: marca,
            serial: serial,
            tecnico: tecnico,
            cor: cor,
            statusprod: statusprod,
            orcamento: orcamento
        }

        fetch('http://10.87.207.2:3000/chamado', {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
             },
                "body": JSON.stringify(attchamado),
        })
        .then(resp => { return resp.json() })
        .then(async data => {
            if (data.length > 0) {
             navigation.navigate('');
        } else {
             ToastAndroid.show('Erro ao atualizar chamado', ToastAndroid.SHORT);
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
                    <Text style={{ fontSize: 40, marginTop: 50, color: "#8300E9" }}>ENTRAR</Text>
                    <TextInput value={produto} onChangeText={setProduto} style={styles.inputs} placeholder="Produto" />
                    <TextInput value={marca} onChangeText={setMarca} style={styles.inputs} secureTextEntry={true} placeholder="Marca" />
                    <TextInput value={serial} onChangeText={setSerial} style={styles.inputs} secureTextEntry={true} placeholder="Serial Number" />
                    <TextInput value={tecnico} onChangeText={setTecnico} style={styles.inputs} secureTextEntry={true} placeholder="Técnico Responsável" />
                    <TextInput value={cor} onChangeText={setCor} style={styles.inputs} secureTextEntry={true} placeholder="Cor" />
                    <TextInput value={statusprod} onChangeText={setStatusprod} style={styles.inputs} secureTextEntry={true} placeholder="Status" />
                    <TextInput value={orcamento} onChangeText={setOrcamento} style={styles.inputs} secureTextEntry={true} placeholder="Orcamento" />
                    <TouchableOpacity onPress={() => {  }} style={styles.btn} ></TouchableOpacity>
                    <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.text}>VOLTAR</Text>
                    </LinearGradient>
                    <TouchableOpacity onPress={() => { atualizarChamado() }} style={styles.btn} >
                    <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.text}>Atualizar Chamado</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>                                                                     
        </KeyboardAvoidingView>
    );
}