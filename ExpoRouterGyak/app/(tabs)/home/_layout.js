import { StyleSheet} from 'react-native';
import { View, Text } from 'react-native';
import {Tabs} from 'expo-router';
export default function feed() {
return(
    <Tabs />
);
}
const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    },
});