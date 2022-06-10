import * as React from 'react';
import { TouchableOpacity, View, Text, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import styles from './styles';
//import storage from '../data/index';

import { BarCodeScanner } from 'expo-barcode-scanner';


export default function ListaChamado({ navigation, route }) {
    const [searchBar, setSearch] = useState("");
    const [chamados, setChamados] = useState([]);

    // QR CODE
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const listarChamados =  () => {
        const url = route.params != undefined ? 'http://10.87.207.19:8080/listchamado/cliente/'+route.params.id: 'http://10.87.207.19:8080/listchamado';
        console.log('cu');
        fetch(url)
        .then(resp => {return resp.json()})
        .then(data => {
            setChamados(data)
        })
    }

    useEffect(() => {
        listarChamados()
    }, [searchBar])

    useEffect(() => {
        fetch("http://10.87.207.19:8080/filter/"+searchBar)
        .then(resp => {return resp.json()})
        .then(data => {
            if(searchBar != "") {
                setChamados(data);
            }
        })
    })
    /*
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`VSFD MIGUEL ${type} ${data} `);
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
      */
    const ch = (key, e) => {
        return(
            <DataTable.Row key={key} style={styles.colunasTabela}>
                <DataTable.Cell>{e.id}</DataTable.Cell>
                <DataTable.Cell>{e.produto}</DataTable.Cell>
                <DataTable.Cell>{e.funcionario.nome}</DataTable.Cell>
                <DataTable.Cell>{e.serial}</DataTable.Cell>
                <DataTable.Cell>{e.status}</DataTable.Cell>
            </DataTable.Row>
        )
    }

    const buscar = () => {
        
    }

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
                    <DataTable style={styles.tabela}>
                        
                        <DataTable.Header style={styles.headerTabela}>
                            <DataTable.Title sortDirection='descending'><Text style={ styles.titleTable}>id</Text></DataTable.Title>
                            <DataTable.Title><Text style={ styles.titleTable}>produto</Text></DataTable.Title>
                            <DataTable.Title><Text style={ styles.titleTable}>Func</Text></DataTable.Title>
                            <DataTable.Title><Text style={ styles.titleTable}>serial</Text></DataTable.Title>
                            <DataTable.Title><Text style={ styles.titleTable}>status</Text></DataTable.Title>
                        </DataTable.Header>
                        <ScrollView>

                       
                        {
                            chamados.map((e, key) => {
                                return ch(key, e)
                            })
                        }
                    
                        </ScrollView>
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