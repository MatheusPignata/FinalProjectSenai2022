import * as React from 'react';
import { TouchableOpacity, View, Text, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Menu({ navigation }) {
    return (
        <KeyboardAvoidingView>
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 50, color: "#8300E9" }}>MENU</Text>
            </View>
            <View style={styles.mid}>
                <View style={styles.midTop}>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('CreateUsuario') }}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>REGISTRAR USUARIO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('UpdateUsuario') }}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>EDITAR USUARIO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Chamado') }}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>CRIAR CHAMADO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('LocalizarChamado') }}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>LOCALIZAR CHAMADO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('AtualizarChamado') }}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>ATUALIZAR CHAMADO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}