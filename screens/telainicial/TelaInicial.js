import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  Alert,
} from "react-native";

const { width, height } = Dimensions.get("window");

const TelaInicial = () => {
  
  console.log("Executando Home");

//  const navigation = useNavigation();

  const handleMinhasAnalisesPress = () => {
    Alert.alert("Aviso", "Função ainda em desenvolvimento");
  };

 /* const logout = () => {
    auth.signOut().then(() => {
      navigation.navigate('login')
    })
  };
*/
  const handleNovaAnalisePress = () => {
    console.log("Nova Análise Pressionada");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.buttonSair}>
        <Button style={styles.textoSair}
            title = "SAIR"
            color="#000000"
            onPress={handleMinhasAnalisesPress}
          />
        </View>
        <Image
          source={require("../../images/coteco_logo.png")}
          style={styles.imagem}
        />
        <Text style={[styles.textoSair, { textAlign: "center", marginLeft: width * 0.01, marginTop: height * 0.15 }]}>
          Olá usuario, selecione uma das opções abaixo:
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="MINHAS ANALISES"
          color="#D9D9D9"
          onPress={handleMinhasAnalisesPress}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="NOVA ANALISE"
          color="#FFA500"
          onPress={handleNovaAnalisePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: width * 0.8,
    height: height * 0.5,
    alignItems: "center",
  },
  imagem: {
    maxWidth: "45%",
    maxHeight: "30%",
    marginTop: height * -0.1,
    marginRight: width * 0.60,
  },
  textoSair: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginBottom: height * -0.05,
  },
  buttonSair: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
  },
  buttonContainer: {
    width: width * 0.5,
    height: height * 0.07,
    marginTop: height * 0.06,
  },
});

export default TelaInicial;