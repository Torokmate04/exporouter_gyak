import { Text, StyleSheet } from 'react-native';
import { View } from 'react-native';
import {Link, Stack, Redirect} from 'expo-router';

export default function Home() {
  return <Redirect href={'/home'}/>
//   return (
//   <View style={styles.container}> 
//   <Link href={{pathname: '/home/Messages', params: {name: "Mateo"}}} style={{fontSize: 20, textDecorationLine: 'underline', color: 'blue',}}>Settings</Link>
// </View>
// );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  }
});