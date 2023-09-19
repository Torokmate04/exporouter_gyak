import {Stack} from 'expo-router';
import { StyleSheet} from 'react-native';
export default () => {
    return <Stack   screenOptions={{headerTintColor: 'white', headerTitleAlign: 'center'}} >



        <Stack.Screen name='index' options={{title: 'Home'}} />
    </Stack>;
}
const styles = StyleSheet.create({
});