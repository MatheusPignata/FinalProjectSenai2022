import * as React from 'react';
import { useState, useEffect } from 'react';
import { TouchableOpacity, TextInput, View, Text, KeyboardAvoidingView, ScrollView, Alert, Modal, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import styles from './styles';

export default function Chamado({ navigation }) {
    const [produto, setProduto] = useState("");
    const [marca, setMarca] = useState("");
    const [serial, setSerial] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tecnico, setTecnico] = useState("");
    const [cliente, setCliente] = useState("");

    const [idTecnico, setIdTecnico] = useState("");
    const [idCliente, setIdCliente] = useState("");

    const [cor, setCor] = useState("");
    const [statusprod, setStatusprod] = useState("");
    const [orcamento, setOrcamento] = useState("");

    const [searchTecnico, setSearchTecnico] = useState('')
    const [searchCliente, setSearchCliente] = useState('')

    const [funcionarios, setFuncionarios] = useState([]);
    const [clientes, setClientes] = useState([]);

    const [statusF, setStatusF] = useState(false)
    const [statusC, setStatusC] = useState(false)

    const [modalVisible, setModalVisible] = useState(false)

    const cadastrarChamado = () => {
        let chamado = {
            produto: produto,
            marca: marca,
            serial: serial,
            funcionario: idTecnico,
            cliente: idCliente,
            cor: cor,
            status: statusprod,
            orcamento: orcamento
        }

        fetch('http://10.87.207.19:8080/criarchamado', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
             },
                "body": JSON.stringify(chamado),
        })
        .then(resp => { return resp })
        .then(data => {
            if (data.status == 200) {
                setModalVisible(true)
                setProduto("")
                setMarca("")
                setOrcamento("")
                setStatusprod("")
                setCor("")
                setSerial("")
                setDescricao("")
                setSearchCliente("")
                setSearchTecnico("")
                setStatusC(false)
                setStatusF(false)
            } else {
                Alert.alert("Erro em cadastrar!")
            }
        })
        
    }

    useEffect(() => {
        const funcionariosFiltrados = [];

        fetch('http://10.87.207.19:8080/listuser')
            .then(resp => { return resp })
            .then(data => {
                if(data.status == 200) {
                    data.json().then(json => {
                        if(searchTecnico != "") {
                            json.forEach(e => {
                                if(e.cargo == "F") {
                                    if(e.nome.includes(searchTecnico)) {
                                        funcionariosFiltrados.push(e)
                                    }
                                }
                            })
                            setFuncionarios(funcionariosFiltrados)
                        }else {
                            setFuncionarios([])
                        }
                    })
                }
            });
    }, [searchTecnico])

    useEffect(() => {
        const clientesFiltrados = [];

        fetch('http://10.87.207.19:8080/listuser')
            .then(resp => { return resp })
            .then(data => {
                if(data.status == 200) {
                    data.json().then(json => {
                        if(searchCliente != "") {
                            json.forEach(e => {
                                if(e.cargo == "C") {
                                    if(e.nome.includes(searchCliente)) {
                                        clientesFiltrados.push(e)
                                    }
                                }
                            })
                            setClientes(clientesFiltrados)
                        }else {
                            setClientes([])
                        }
                    })
                }
            });
    }, [searchCliente])

    const setarInputs = (values) => {
        if(values.cargo == "F") {
            setTecnico(values.nome)
            setStatusF(true)
            setFuncionarios([])
            setIdTecnico(values.id)
        }else {
            setCliente(values.nome)
            setStatusC(true)
            setClientes([])
            setIdCliente(values.id)
        }
    }


    return (
        
        <KeyboardAvoidingView behavior="height">
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
                </BlurView>
            </Modal>
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
                        <View style={styles.caixaListFC}>
                            
                            {
                                statusF?
                                <TextInput value={tecnico} onChangeText={setTecnico} style={styles.inputFC} placeholder="Técnico Responsável" />
                                
                                :
                                
                                <TextInput value={searchTecnico} onChangeText={setSearchTecnico} style={styles.inputFC} placeholder="Técnico Responsável" />
                                
                            }


                            {
                                funcionarios != '' ?
                                <View style={styles.caixaFC}>
                                {
                                    funcionarios.map((e, key)=> {
                                        return(
                                            <TouchableOpacity key={key} style={styles.btnCaixaFC} onPress={() => setarInputs(e)}>
                                                <Text style={styles.text}>{e.nome}</Text>
                                            </TouchableOpacity>      
                                        )
                                    })
                                }
                                </View>
                                
                                :
                                <View></View>
                            }
                            
                        </View>
                        <View style={styles.caixaListFC}>
                            {
                                statusC?
                                <TextInput value={cliente} onChangeText={setCliente} style={styles.inputFC} placeholder="Cliente Responsável pelo chamado" />
                                
                                :
                                
                                <TextInput value={searchCliente} onChangeText={setSearchCliente} style={styles.inputFC} placeholder="Cliente Responsável pelo chamado" />
                                
                            }
                            {
                                clientes != '' ?
                                <View style={styles.caixaFC}>
                                {
                                    clientes.map((e, key)=> {
                                        return(
                                            <TouchableOpacity key={key} style={styles.btnCaixaFC} onPress={() => setarInputs(e)}>
                                                <Text style={styles.text}>{e.nome}</Text>
                                            </TouchableOpacity>      
                                        )
                                    })
                                }
                                </View>
                                
                                :
                                <View></View>
                            }
                            
                        </View>
                        
                        
                        <TextInput value={cor} onChangeText={setCor} style={styles.inputs} placeholder="Cor" />
                        <TextInput value={statusprod} onChangeText={setStatusprod} style={styles.inputs} placeholder="Status" />
                        <TextInput value={orcamento} onChangeText={setOrcamento} style={styles.inputs}placeholder="Orcamento" />
                        <View style={styles.caixaDescricao}>
                            <TextInput value={descricao} onChangeText={setDescricao} style={styles.inputdesc} secureTextEntry={false} placeholder="Descrição do Problema"></TextInput>
                        </View>
                        
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn} onPress={() => { cadastrarChamado() }}>
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