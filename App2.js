import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './components/AssetExample';


import { Button } from 'react-native-paper';


export default function App() {

  return (
    <View style={styles.container}>
    <Image
    source={require('./assets/foto-de-perfil.png')}
    style={styles.logo}
    />

    <Text style={styles.nome}>Nome</Text>
    <TextInput style={styles.input} placeholder="nome"/>

    <Text style={styles.cpf}>Cpf</Text>
    <TextInput style={styles.input}  placeholder="cpf"/>

        <Text style={styles.cpf}>Email</Text>
    <TextInput style={styles.input}  placeholder="email"/>

    <Button  style ={styles.button} mode="contained">
    Salvar
    </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#e3dfde'
  },
  logo: {
    width:100,
    height:100,
    borderRadius:100,
    marginBottom:50
  },
  input:{
    marginTop:10,
    padding:10,
    width:200,
    backgroundColor:'#fff',
    fontSize:15

  },
  button:{
    marginTop:30
  },
  nome:{
    fontWeight:'bold'
  },
  cpf:{
    fontWeight:'bold',
    marginTop:10
  }


});
