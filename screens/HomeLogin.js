import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
const HomeLogin = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/homebg2.jpg")}
    >
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View style={{ height: "50%" }} py={100}>
          <Text style={styles.title} color="coolGray.50">
            Welcome
          </Text>
        </View>
        <View mx={5}>
          <Button
            style={{ borderRadius: 15 }}
            my={2}
            p={5}
            bg="light.800"
            onPress={() => navigation.navigate("Login")}
          >
            <Text color="white">Login</Text>
          </Button>
          <Button
            style={{ borderRadius: 15 }}
            my={2}
            p={5}
            bg="light.800"
            onPress={() => navigation.navigate("Signup")}
          >
            <Text color="white">Cadastro</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 70,
    height: 100,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});

export default HomeLogin;
