import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>Encabezado</Text>
        <Text style={styles.texto}>X</Text>
      </View>
      <View style={styles.cuerpo}>
        <Text>Cuerpo</Text>
      </View>
      <View style={styles.pie}>
        <Text>Pie</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7d9f3',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  encabezado:{
    flex:1.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#227edb'
  },
  cuerpo:{
    flex:8
  },
  pie:{
    flex:1,
    backgroundColor:'#227edb'
  }
});
