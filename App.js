import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { Provider } from 'react-redux';
import store from './store';
import StackNavigation from './StackNavigation';
import IntroSlider from './screens/IntroSlider';


export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
  <StackNavigation/> 

     </SafeAreaView>

     </Provider>
  );
}

const styles=StyleSheet.create({
  container: {
      flex: 1,
      
  }
})