import * as React from 'react';
import { View, Text, Alert, Image, TouchableOpacity, TextInput, ScrollView, Modal } from "react-native";
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

import styles from './styles';
import logo from '../assets/chama.png';


export default function ChamadoUnico({ navigation, route}) {
    const id = route.params;

    const [produto, setProduto] = useState("");
    const [marca, setMarca] = useState("");
    const [serial, setSerial] = useState("");
    const [tecnico, setTecnico] = useState("");
    const [cor, setCor] = useState("");
    const [statusprod, setStatusprod] = useState("");
    const [orcamento, setOrcamento] = useState(0);
    const [desc, setDesc] = useState("");

    const [idFuncionario, setIdFuncionario] = useState("");
    const [idCliente, setIdCliente] = useState("");
    
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        fetch('http://10.87.207.19:8080/listchamado/'+id)
        .then(resp => { return resp })
        .then(data => {
            if(data.status == 200) {
                data.json().then(json => {
                    setarInputs(json)
                 })
            }else {
                Alert.alert("chamado nao encontrado")
                navigation.goBack()
            }
           
        })
    }, [])


    const setarInputs = (values) => {
        const orcamentoString = ""+values.orcamento

        setProduto(values.produto)
        setMarca(values.produto)
        setOrcamento(orcamentoString)
        setTecnico(values.funcionario.nome)
        setCor(values.cor)
        setStatusprod(values.produto)
        setSerial(values.serial)
        setDesc(values.descricao)
        setIdCliente(values.cliente.id)
        setIdFuncionario(values.funcionario.id)
    }

    const alterarChamado = () => {
        let chamado = {
            produto: produto,
            marca: marca,
            serial: serial,
            funcionario: idFuncionario,
            cliente: idCliente,
            cor: cor,
            status: statusprod,
            orcamento: orcamento
        }

        fetch('http://192.168.0.102:8080/alterarchamado/'+id, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
             },
                "body": JSON.stringify(chamado),
        })
        .then(resp => { return resp })
        .then(data => {
            if (data.status == 200) {
                setModalVisible(true)
            } else {
                Alert.alert("Erro em cadastrar!")
            }
        })
    }

    return(
        <View style={styles.container}>
            <Modal
                    style={styles.modalShadow}
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                <BlurView intensity={80} tint="dark" style={styles.blurContainer}>
                    <View style={styles.modal}>
                        <Text style={{ fontSize: 18 }}>Alteração realizada com sucesso</Text>
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
                </BlurView>
            </Modal>
            <View style={styles.top}>
                <Text style={{ fontSize: 40, color: "#8300E9", fontWeight: "bold" }}>Chamado</Text>
            </View>
            <View style={styles.mid}>
                <View style={styles.caixaImageLogo}>
                    <Image source={logo} style={{ width: 75, height: 75}}/>
                </View>
                <Text style={styles.textTitulo}>Informações do Chamado</Text>
                
                    <ScrollView style={styles.scroll}>
                        <View style={styles.cardChamado}>
                            <TextInput value={produto} onChangeText={setProduto} style={styles.inputs} placeholder="Produto" />
                            <TextInput value={marca} onChangeText={setMarca} style={styles.inputs} placeholder="Marca" />
                            <TextInput value={serial} onChangeText={setSerial} style={styles.inputs} placeholder="Serial Number" />
                            <TextInput value={tecnico} onChangeText={setTecnico} style={styles.inputs} placeholder="Técnico Responsável" />
                            <TextInput value={cor} onChangeText={setCor} style={styles.inputs} placeholder="Cor" />
                            <TextInput value={statusprod} onChangeText={setStatusprod} style={styles.inputs} placeholder="Status" />
                            <TextInput value={orcamento}  keyboardType = 'number-pad' onChangeText={setOrcamento} style={styles.inputs} placeholder="Orcamento" />
                            <View style={styles.caixaDescricao}>
                                <TextInput style={styles.inputdesc} placeholderTextColor={'white'} value={desc} onChangeText={setDesc}  secureTextEntry={false} placeholder="Descrição do Problema"></TextInput>
                            </View>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.btn} onPress={() => { alterarChamado() }}>
                                    <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                                        <Text style={styles.text}>ALTERAR</Text>
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
    )
}