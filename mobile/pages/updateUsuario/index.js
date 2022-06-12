import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { BlurView } from 'expo-blur';
import storage from '../data/index'

export default function UpdateUsuario({ navigation }) {
    const [nome, setNome] = useState("");
    const [id, setId] = useState(null);
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");

    const [searchBar, setSearch] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const usuariosFiltrados = [];

        fetch('http://192.168.0.102:8080/listuser')
            .then(resp => { return resp })
            .then(data => {
                if(data.status == 200) {
                    data.json().then(json => {
                        if(searchBar != "") {
                            json.forEach(e => {
                                if(e.nome.includes(searchBar)) {
                                    usuariosFiltrados.push(e)
                                }
                            })
                            setUsuarios(usuariosFiltrados)
                        }else {
                            setUsuarios([])
                        }
                    })
                }
            });
    }, [searchBar])

    const setarInputs = (values) => {
        setSearch('')
        setNome(values.nome)
        setEmail(values.email)
        setEndereco(values.endereco)
        setTelefone(values.telefone)
        setId(values.id)
    }

    const atualizar = () => {
        let data = {
            nome: nome,
            email: email,
            telefone: telefone,
            endereco: endereco,
        }

        fetch('http://192.168.0.102:8080/alterar/' + id, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data),
        })
        .then(resp => { return resp })
        .then(data => {
            if (data.status == 200) {
                setModalVisible(true)
            } else {
                ToastAndroid.show('Erro ao atualizar usuário', ToastAndroid.SHORT);
            };
        });
    };

    return (
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
                <Text style={{ fontSize: 40, color: "#8300E9", fontWeight: "bold" }}>USUARIO</Text>
            </View>
            <View style={styles.mid}>
                    <View style={styles.searchBox}>
                        <View style={styles.searchBar}>
                            <TextInput  onChangeText={setSearch} placeholder="Buscar..." style={{ width: "100%", height: "100%" }} />
                            <TouchableOpacity style={{ width: "10%", height: "90%" }} onPress={() => buscar()}>
                                <Image style={{ width: "100%", height: "90%", marginTop: 4 }} source={require('../../assets/lupa.png')} />
                            </TouchableOpacity>
                        </View>
                        {
                            usuarios != '' ? 
                            <View style={styles.usuarios}>
                                {
                                usuarios.map(e=> {
                                    return(
                                        <View>
                                            <Text onPress={() => setarInputs(e)} style={styles.nomeUsuario}>{e.nome}</Text>
                                        </View>
                                    )
                                })
                                }
                            </View>
                            : 
                            <View>
                            </View>
                        }
                    </View>
                    <ScrollView>
                    <View style={styles.inputBox}>
                        <TextInput editable={(nome != '') ? true : false} value={nome} onChangeText={setNome} style={styles.inputs} placeholder="Nome" />
                        <TextInput editable={(email != '') ? true : false} value={email} onChangeText={setEmail} style={styles.inputs} placeholder="e-mail" />
                        <TextInput editable={(telefone != '') ? true : false} value={telefone} onChangeText={setTelefone} style={styles.inputs} placeholder="Telefone" />
                        <TextInput editable={(endereco != '') ? true : false} value={endereco} onChangeText={setEndereco} style={styles.inputs} placeholder="Endereço" />
                    </View>
                    <View style={styles.midBot}>
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
                </ScrollView>
            </View>
        </View>
    );
};