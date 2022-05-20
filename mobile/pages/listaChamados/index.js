import * as React from 'react';
import { TouchableOpacity, View, Text, KeyboardAvoidingView, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import styles from './styles';

export default function ListaChamado({ navigation }) {
    const [searchBar, setSearch] = useState("");

    return(
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 45, color: "#8300E9", fontWeight: "bold" }}>Chamados</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.searchBar}>
                        <TextInput value={searchBar} onChangeText={setSearch} placeholder="Buscar..." style={{ width: "50%", height: 35, marginTop: 25, margin: "auto", borderWidth: 1, borderColor: "black", borderRadius: 10 }} />    
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
                        <View style={styles.conteudoLista}>
                            <View style={styles.conteudo}>
                                <Text>001</Text> 
                            </View> 
                            <View style={styles.conteudo2}>
                                <Text>grgregr</Text>
                            </View>
                            <View style={styles.conteudo3}>
                                <Text>Stargrgrgrgtus</Text>
                            </View>
                            <View style={styles.conteudo4}>
                                <Text>Tergrgrgo</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}>
                    <LinearGradient style={styles.gradient} colors={["#4630AB", "#2B0548"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.text}>VOLTAR</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView> 
)
}