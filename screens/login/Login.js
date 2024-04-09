import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');
const imageSize = '30%';

const Login = () => {
  const [email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');

  const handleLogin = async () => {

    const dadosUsuario = { email, Senha };
    try {

      await AsyncStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
    } catch (error) {
      console.error('Erro ao salvar dados de login:', error);
    }
  };

  console.log('Executanto Login');
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../images/coteco_logo.png')}
          style={styles.imagem}
        />
        <Text style={styles.textoTitulo}>
          LOGIN
        </Text>
        <View style={styles.containerInputs}>
          <Text style={styles.textoPadrao}>E-MAIL</Text>
          <TextInput
            style={styles.inputPadrao}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={[styles.textoPadrao, { marginTop: height * (-0.02) }]}>SENHA: </Text>
          <TextInput
            style={styles.inputPadrao}
            value={Senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.containerEnviar} onPress={handleLogin}>
          <Text style={styles.textoEnviar}>ENTRAR</Text>
        </TouchableOpacity>
        <Text style={styles.textoLink}>ESQUECI MINHA SENHA</Text>
        <View style={styles.containerSerCliente}>
          <Text style={styles.textoPadrao}>QUERO SER CLIENTE</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: width * 0.8,
    alignItems: 'center',
    marginTop: height * 0.1,
  },
  imagem: {
    maxWidth: '53%',
    maxHeight: '40%',
    marginBottom: height * 0.01,
  },
  textoTitulo: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.03,
    textAlign: 'left',
  },
  containerInputs: {
    textAlign: 'left',
  },
  textoPadrao: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.005,
  },
  inputPadrao: {
    width: width * 0.8,
    height: height * 0.05,
    fontSize: width * 0.04,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: height * 0.05,
  },
  containerEnviar: {
    width: width * 0.6,
    height: height * 0.06,
    fontSize: width * 0.05,
    borderRadius: 5,
    backgroundColor: '#FFA500',
    marginBottom: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoEnviar: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  textoLink: {
    fontSize: width * 0.03,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  containerSerCliente: {
    width: width * 1,
    height: height * 0.09,
    fontSize: width * 0.04,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.12,
  },
});

export default Login;
