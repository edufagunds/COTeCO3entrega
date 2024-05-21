import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { auth, db } from '../../services/firebaseConfig';

const { width, height } = Dimensions.get('window');
const imageSize = '75%';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [senhaMatch, setSenhaMatch] = useState(true);
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const validarSenha = () => {
    if (senha === confirmaSenha) {
      setSenhaMatch(true);
    } else {
      setSenhaMatch(false);
    }
  };

  const handleCadastro = async () => {
    if (!senhaMatch) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        nome,
        empresa,
        cnpj,
        telefone,
        email
      });

      navigation.navigate('login'); 
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            source={require('../../images/coteco_logo.png')}
            style={styles.imagem}
          />
          <Text style={styles.textoTitulo}>
            Informe seus dados e um de nossos agentes entrará em contato com você
          </Text>
          <View style={styles.containerInputs}>
            <Text style={styles.textoPadrao}>Nome do Responsável:</Text>
            <TextInput 
              style={styles.inputPadrao}
              value={nome}
              onChangeText={setNome}
            />

            <Text style={styles.textoPadrao}>Nome da Empresa: </Text>
            <TextInput 
              style={styles.inputPadrao}
              value={empresa}
              onChangeText={setEmpresa}
            />

            <Text style={styles.textoPadrao}>CNPJ:</Text>
            <TextInput 
              style={styles.inputPadrao}
              value={cnpj}
              onChangeText={setCnpj}
              keyboardType='numeric'
            />

            <Text style={styles.textoPadrao}>Telefone:</Text>
            <TextInput 
              style={styles.inputPadrao}
              value={telefone}
              onChangeText={setTelefone}
              keyboardType='numeric'
            />

            <Text style={styles.textoPadrao}>E-mail:</Text>
            <TextInput 
              style={styles.inputPadrao}
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.textoPadrao}>Senha:</Text>
            <TextInput
              style={styles.inputPadrao}
              secureTextEntry={true}
              value={senha}
              onChangeText={(text) => setSenha(text)}
              keyboardType='numeric'
            />

            <Text style={styles.textoPadrao}>Confirme Senha:</Text>
            <TextInput
              style={styles.inputPadrao}
              secureTextEntry={true}
              value={confirmaSenha}
              onChangeText={(text) => setConfirmaSenha(text)}
              onBlur={validarSenha}
              keyboardType='numeric'
            />
            {!senhaMatch && <Text style={{ color: 'red' }}>As senhas não coincidem</Text>}
          </View>

          <Text style={[styles.textoTitulo, {fontSize: 13}]}>
            Ao clicar no botão abaixo, eu concordo em ser contatado(a) por telefone
            e/ou e-mail, receber ofertas e comunicados em nome da COT&CO
          </Text>
          <TouchableOpacity onPress={handleCadastro}>
            <View style={styles.containerEnviar}>
              <Text style={styles.textoEnviar}>ENVIAR</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.textoLink}>Já Sou Cliente</Text>
          </TouchableOpacity>
          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        </View>
      </View>
    </ScrollView>
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
    marginTop: height * 0.02,
  },
  imagem: {
    width: imageSize,
    aspectRatio: 1,
    marginBottom: height * 0.003,
    alignSelf: 'center',
  },
  textoTitulo: {
    fontSize: width * 0.06,
    marginBottom: height * 0.02,
    textAlign: 'left',
  },
  containerInputs: {
    flex: 1,
    textAlign: 'left',
  },
  textoPadrao: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  inputPadrao: {
    width: width * 0.8,
    height: height * 0.06,
    fontSize: width * 0.05,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: height * 0.015,
  },
  containerEnviar: {
    width: width * 0.5,
    height: height * 0.05,
    fontSize: width * 0.05,
    backgroundColor: '#FFA500',
    marginBottom: height * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoEnviar: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  textoLink: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default Cadastro;
