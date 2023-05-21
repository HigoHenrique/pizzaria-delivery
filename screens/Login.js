import React, { useState } from "react";
import {
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getUsers } from "../api/user.js";
import { createUser } from "../api/user.js";
import useUser from "../contexts/userContext.js";
import { Input, Icon, Pressable, View } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);

  const navigation = useNavigation();
  const addUser = useUser((state) => state.addUser);

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleLogin = async () => {
    const user = await data.find((user) => {
      if (user.email === email && user.senha === password) return user;
    });
    if (user) {
      setEmail("");
      setPassword("");
      addUser({
        nome: user.nome,
        email: user.email,
      });
      navigation.navigate("Home");
    } else {
      setEmail("");
      setPassword("");
      navigation.navigate("Login");
    }
  };

  const handleForgotPassword = () => {
    // Lógica para levar o usuário para a página de redefinição de senha
  };

  const handleSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container} bg="light.800">
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Input
          w={{
            base: "85%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          variant="rounded"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          my={2}
        />
        <Input
          variant="rounded"
          w={{
            base: "85%",
            md: "25%",
          }}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.buttonView}>
          <Button title="Entrar" onPress={handleLogin} />
        </View>
        <View style={styles.buttonView}>
          <Button title="Sobre" onPress={handleLogin} />
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUp} onPress={handleSignUp}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 20,
    color: "white",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  forgotPassword: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  signUp: {
    color: "green",
    marginTop: 20,
  },
  buttonView: {
    marginBottom: 20,
  },
});

export default Login;
