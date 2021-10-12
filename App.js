import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './components/AssetExample';


import { Button } from 'react-native-paper';


export default function App() {

  return (
    <View style={styles.container}>
    <Image
    source={require('./assets/foto-de-perfil.jpeg')}
    style={styles.logo}
    />

    <Text style={styles.login}>Login</Text>
    <TextInput style={styles.input} placeholder="login"/>

    <Text style={styles.senha}>Senha</Text>
    <TextInput style={styles.input}  securityTextEntry = {true} placeholder="senha"/>

    <Button  style ={styles.button} mode="contained">
    Login
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
  login:{
    fontWeight:'bold'
  },
  senha:{
    fontWeight:'bold',
    marginTop:10
  }


});

