import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <LinearGradient colors={['#1398DB', '#53B3E2']}  style={{flex:1}}>
      <HomeScreen/>

     </LinearGradient>
     </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container: {
      flex: 1,
      
  }
})