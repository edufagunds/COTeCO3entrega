import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,

} from "react-native";

const { width, height } = Dimensions.get("window");

const ConhecaNos = () => {
  
  console.log("Executando Conheça-nos");

//  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../images/coteco_logo.png")}
          style={styles.imagem}
        />
        <Text style={[styles.textoSair, { textAlign: "left", marginLeft: width * 0.01, marginTop: height * 0.15 }]} numberOfLines={0}>
          Eduardo Fagundes Correa
          rm97195@fiap.com{'\n\n'}
          Murilo Ariel Reis{'\n'}
          rm97002@fiap.com{'\n\n'}
          Luiz Henrique de Jesus do Nascimento{'\n'}
          rm96335@fiap.com{'\n\n'}
          Samuel Enderson Lima da Silva{'\n'}
          rm96677@fiap.com{'\n\n'}
        </Text>
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

});

export default ConhecaNos;