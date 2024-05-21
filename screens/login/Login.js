import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';

const { width, height } = Dimensions.get('window');
const imageSize = '30%';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const irparaCadastro = () => {
    navigation.navigate('cadastro');
  };

  const handleAlerta = () => {
    Alert.alert("Aviso", "Contate um dos Desenvolvedores na pagina inicial > Conheca-nos");
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log(user);
      setUser(user);
      setError('');
    } catch (error) {
      setError("E-mail ou senha incorretos, por favor tente novamente");
      console.log(error.message);
    }
  };

  console.log('Executando Login');
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
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            keyboardType='numeric'
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.containerEnviar} onPress={handleLogin}>
          <Text style={styles.textoEnviar}>ENTRAR</Text>
        </TouchableOpacity>
        <Text 
          onPress={handleAlerta}
          style={styles.textoLink}>
          ESQUECI MINHA SENHA
          </Text>
        <TouchableOpacity onPress={irparaCadastro}>
        <View style={styles.containerSerCliente}>
          <Text style={styles.textoPadrao}>QUERO SER CLIENTE</Text>
        </View>
        </TouchableOpacity>
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
    marginTop: height * 0.07,
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
    marginBottom: height * 0.02,
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.04,
    marginBottom: height * 0.02,
    textAlign: 'center',
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
    marginTop: height * 0.1,
  },
});

export default Login;
