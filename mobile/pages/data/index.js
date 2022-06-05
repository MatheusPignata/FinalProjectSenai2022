import AsyncStorage from '@react-native-async-storage/async-storage';

const definirData = async (json) => {
    try {
        await AsyncStorage.setItem('@data', JSON.stringify(json));
    } catch (error) {
        console.log(error);
    }
}

const pegarData = async () => {
    try {
        const value = await AsyncStorage.getItem('@data');
        if(value !== null) {
           return  value;
        }
      } catch(e) {
        console.log(e);
      }
}

export default { definirData, pegarData }