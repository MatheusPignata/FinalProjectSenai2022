import * as React from 'react';
import { TouchableOpacity, View, Text, KeyboardAvoidingView, Image, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import styles from './styles';

export default function ListaChamado({ navigation }) {
    
    const [searchBar, setSearch] = useState("");
    const [chamados, setChamados] = useState([]);

    useEffect( () => {
        fetch("http://192.168.0.102:8080/listchamado/cliente/"+2)
        .then(resp => {return resp.json()})
        .then(data => {
            setChamados(data);
        })
    }, []);

    const ch = (i) => {
        console.log(i);
       return (
           <View>
                {
                    chamados.map((e, key) => {
                        if(i == "id") {
                            return (<Text key={key}>{e.id}</Text>)
                        }else if(i == "produto") {
                            return (<Text key={key}>{e.produto}</Text>)
                        }else if(i == 'status') {
                            return (<Text key={key}>{e.status}</Text>)
                        }else if(i == 'descricao') {
                            return (<Text key={key}>{e.descricao}</Text>)
                        }
                       
                    })
                }
           </View>
       )
    }

    return(
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 45, color: "#8300E9", fontWeight: "bold" }}>Chamados</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.searchBar}>
                        <TextInput value={searchBar} onChangeText={setSearch} placeholder="Buscar..." style={{ width: 150, height: 35, marginBottom:"5%", borderWidth: 1, borderColor: "black", borderRadius: 10 }} />    
                    </View>
                    <View style={styles.tabela}>
                        <View style={styles.uptable}>
                            <View style={styles.lista}>
                                <Text style={{ color: "#fff", fontWeight: "bold" }}>Chamado</Text> 
                            </View> 
                            <View style={styles.lista2}>
                                <Text style={{ color: "#fff", fontWeight: "bold" }}>Produto</Text>
                            </View>
                            <View style={styles.lista3}>
                                <Text style={{ color: "#fff", fontWeight: "bold" }}>Status</Text>
                            </View>
                            <View style={styles.lista4}>
                                <Text style={{ color: "#fff", fontWeight: "bold" }}>Tecnico</Text>
                            </View>
                        </View>
                        <ScrollView>
                            <View style={styles.conteudoLista}>
                                <View style={styles.conteudo}>
                                    {ch("id")}
                                </View> 
                                <View style={styles.conteudo2}>
                                    {ch("produto")}
                                </View>
                                <View style={styles.conteudo3}>
                                    {ch("status")}
                                </View>
                                <View style={styles.conteudo4}>
                                    {ch("descricao")}
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                    <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.text}>VOLTAR</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView> 
)
}