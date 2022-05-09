import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 50, color: "#8300E9", fontFamily: "Inter" }}>MENU</Text>
            </View>
            <View style={styles.mid}>
                <View style={styles.midTop}>
                    <TouchableOpacity style={styles.btn}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text} onPress={() => { navigation.navigate('') }}>REGISTRAR USUARIO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text} onPress={() => { navigation.navigate('') }}>EDITAR USUARIO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text} onPress={() => { navigation.navigate('') }}>CRIAR CHAMADO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <LinearGradient style={styles.gradient} colors={["#482673", "#8F5CD0"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text} onPress={() => { navigation.navigate('') }}>LOCALIZAR CHAMADO</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.midBot}>
                </View>
            </View>
        </View>
    )
}