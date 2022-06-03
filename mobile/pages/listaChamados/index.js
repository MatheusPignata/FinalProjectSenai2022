import * as React from 'react';
import { TouchableOpacity, View, Text, KeyboardAvoidingView, Image, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DataTable } from 'react-native-paper';
import { useState, useEffect } from 'react';
import styles from './styles';

export default function ListaChamado({ navigation, route }) {
    const { id } = route.params;
    const [searchBar, setSearch] = useState("");
    const [chamados, setChamados] = useState([]);

    useEffect( () => {
        fetch("http://10.87.207.19:8080/listchamado/cliente/"+id)
        .then(resp => {return resp.json()})
        .then(data => {
            setChamados(data);
        })
    }, []);

    const ch = (key, e) => {
        return(
            <DataTable.Row key={key}>
                <DataTable.Cell>{e.id}</DataTable.Cell>
                <DataTable.Cell>{e.produto}</DataTable.Cell>
                <DataTable.Cell>{e.orcamento}</DataTable.Cell>
                <DataTable.Cell>{e.status}</DataTable.Cell>
            </DataTable.Row>

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

                    <DataTable>
                        <DataTable.Header>

                            
                            <DataTable.Title sortDirection='descending'><Text style={ styles.titleTable}>id</Text></DataTable.Title>
                            <DataTable.Title><Text style={ styles.titleTable}>produto</Text></DataTable.Title>
                            <DataTable.Title><Text style={ styles.titleTable}>orçamento</Text></DataTable.Title>
                            <DataTable.Title><Text style={ styles.titleTable}>status</Text></DataTable.Title>
                        </DataTable.Header>
                        {
                            chamados.map((e, key) => {
                                return ch(key, e)
                            })
                        }
                    </DataTable>
                    
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