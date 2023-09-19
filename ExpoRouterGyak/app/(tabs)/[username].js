import { StyleSheet, View, Text, Button} from 'react-native';
import { Link, useRouter, useGlobalSearchParams, Stack, Screen } from 'expo-router';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


export default function Settings() {
    const router = useRouter();
    const {name, username} = useGlobalSearchParams();
    return(
        <View style={styles.container}>
            <Stack.Screen options={{title: username}}/>
            <Text style={{fontSize: 15, marginBottom:20}}>Hello {name} (@{username})</Text>
            <Button title='Go back' onPress={()=>router.back()}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
      }
});