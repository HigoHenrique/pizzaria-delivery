import React, { useState } from "react";
import {
  
  TextInput,
  // Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getUsers } from "../api/user.js";
import { createUser } from "../api/user.js";
import useUser from "../contexts/userContext.js";
import { extendTheme ,Icon, Pressable ,Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

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
    const user = data.find(
      (user) => user.email === email && user.senha === password
    );
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

  // return (
  //   <ImageBackground
  //     style={styles.background}
  //     source={require("../assets/homebg2.jpg")}
  //   >
  //     <View>
  //       <View style={{ height: "50%" }} py={120}>
  //         <Text style={styles.title} color="coolGray.50">Login</Text>
  //       </View>
  //       <View style={styles.buttonContainer}>
  //         <Input
  //           w={{
  //             base: "85%",
  //             md: "25%",
  //           }}
  //           p={5}
  //           InputLeftElement={
  //             <Icon
  //               as={<MaterialIcons name="person" />}
  //               size={5}
  //               ml="2"
  //               color="muted.400"
  //             />
  //           }
  //           variant="rounded"
  //           placeholder="Email"
  //           onChangeText={(text) => setEmail(text)}
  //           value={email}
  //           my={2}
  //         />
  //         <Input
  //           variant="rounded"
  //           w={{
  //             base: "85%",
  //             md: "25%",
  //           }}
  //           p={5}
  //           type={show ? "text" : "password"}
  //           InputRightElement={
  //             <Pressable onPress={() => setShow(!show)}>
  //               <Icon
  //                 as={
  //                   <MaterialIcons
  //                     name={show ? "visibility" : "visibility-off"}
  //                   />
  //                 }
  //                 size={5}
  //                 mr="2"
  //                 color="muted.400"
  //               />
  //             </Pressable>
  //           }
  //           placeholder="Senha"
  //           value={password}
  //           onChangeText={(text) => setPassword(text)}
  //         />

  //         <View mx={5}>
  //           <Button title="Entrar"
  //             style={{ borderRadius: 15 }}
  //             // w={{
  //             //   base: "85%",
  //             //   md: "25%",
  //             // }}
  //             my={2}
  //             p={5}
  //             bg="light.800"
  //             onPress={handleLogin}
  //           >
  //           <Text color="white">Login</Text>
  //           </Button>
          
  //           <Button title="Sobre"
  //             style={{ borderRadius: 15 }}
  //             // w={{
  //             //   base: "85%",
  //             //   md: "25%",
  //             // }}
  //             my={2}
  //             p={5}
  //             bg="light.800"
  //             onPress={handleLogin}
  //           >
  //             <Text color="white">Sobre</Text>
  //           </Button>
  //         </View>
  //         <TouchableOpacity onPress={handleForgotPassword}>
  //           <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity onPress={handleSignUp}>
  //           <Text style={styles.signUp} onPress={handleSignUp}>
  //             Cadastre-se
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   </ImageBackground>
  // );
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Bem-vindo
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Faça login para continuar!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input 
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              // variant="rounded"
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}              
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input type="password"
              // variant="rounded"
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
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Esqueceu a senha?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
            Logar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              Eu sou um novo usuário.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} onPress={handleSignUp}>
              Cadastrar
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  titleContainer: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 70,
    height: 100,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
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
