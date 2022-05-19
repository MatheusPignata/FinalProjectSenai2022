import * as React from 'react';
import { TouchableOpacity, View, Text, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function ListaChamado({ navigation }) {
    return(
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={{ fontSize: 45, color: "#8300E9", fontWeight: "bold" }}>Chamados</Text>
                </View>
                <View style={styles.mid}>
                    <View style={styles.midTop}>
                        <Text>oi</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}>
                    <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.text}>VOLTAR</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView> 
)

}