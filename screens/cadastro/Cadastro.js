import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const imageSize = '75%';

const Cadastro = () => {
  console.log('Executanto Cadastro')
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
            <Text style={styles.textoPadrao}>Nome do Responsavel:</Text>
            <TextInput style={styles.inputPadrao}></TextInput>

            <Text style={styles.textoPadrao}>Nome da Empresa: </Text>
            <TextInput style={styles.inputPadrao}></TextInput>

            <Text style={styles.textoPadrao}>CNPJ:</Text>
            <TextInput style={styles.inputPadrao}></TextInput>

            <Text style={styles.textoPadrao}>Telefone:</Text>
            <TextInput style={styles.inputPadrao}></TextInput>

            <Text style={styles.textoPadrao}>E-mail:</Text>
            <TextInput style={styles.inputPadrao}></TextInput>
          </View>

          <Text style={[styles.textoTitulo, {fontSize: 13}]}>
            Ao clicar no botao abaixo, eu concordo em ser contatato(a) por telefone
            e/ou e-mail, receber ofertas e comunicados em nome da COT&CO
          </Text>
          <View style={styles.containerEnviar}>
            <Text style={styles.textoEnviar}>ENVIAR</Text>
          </View>
          <Text style={styles.textoLink}>Já Sou Cliente</Text>
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
  textAlign: 'center'
},

});

export default Cadastro;
