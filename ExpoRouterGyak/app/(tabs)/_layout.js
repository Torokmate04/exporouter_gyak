import {Stack, Tabs, useRouter} from 'expo-router';
import { StyleSheet} from 'react-native';
// export default Tabs;
 export default () => {
     return <Stack   screenOptions={{headerTintColor: 'white', headerTitleAlign: 'center'}} >


        <Stack.Screen name='home' options={{headerShown: false}} />
        <Stack.Screen name='index' options={{title: 'Home'}} />
     </Stack>;
 }
const styles = StyleSheet.create({
});