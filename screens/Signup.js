import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {
  Alert,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  IconButton,
  CloseIcon // Importar o IconButton aqui
} from 'native-base';
import { createUser } from '../api/user.js';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/user.js';

const Signup = () => {
  const { refetch } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const navigation = useNavigation();

  const cadastrar = async () => {
    if (nome && email && password && endereco && telefone) {
      const novoUser = {
        nome,
        email,
        endereco,
        telefone,
        senha: password,
      };
      try {
        await createUser(novoUser);
        refetch();
        navigation.navigate('Login');
      } catch {
        console.log('erro ao cadastrar usuário!');
        setShowAlert(true);
        setAlertStatus('error');
        setAlertTitle('Erro ao cadastrar usuário!');
      }
    } else {
      console.log('Preencha todos os campos!');
      setShowAlert(true);
      setAlertStatus('error');
      setAlertTitle('Preencha todos os campos!');
    }
  };

  return (
    <NativeBaseProvider>
      <Center w="100%" h="88%">
        <Box safeArea p="2" w="90%" maxW="290" py="1">
          <Heading size="lg" color="coolGray.800" _dark={{ color: 'warmGray.50' }} fontWeight="semibold">
            Bem-vindo
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{ color: 'warmGray.200' }} fontWeight="medium" size="xs">
            Cadastre-se para continuar!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl isRequired>
              <FormControl.Label>Nome</FormControl.Label>
              <Input placeholder="Nome" onChangeText={setNome} value={nome} />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder="exemplo@email.com" onChangeText={setEmail} value={email} />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Senha</FormControl.Label>
              <Input type="password" placeholder="*********" onChangeText={setPassword} value={password} />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Endereço</FormControl.Label>
              <Input placeholder="Rua exemplo, N 101, Bairro " onChangeText={setEndereco} value={endereco} />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Número de Telefone</FormControl.Label>
              <Input placeholder="XX XXXXX-XXXX" onChangeText={setTelefone} value={telefone} />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={cadastrar}>
              Cadastrar
            </Button>
          </VStack>
        </Box>
      </Center>
      {showAlert && (
        <Alert
          status={alertStatus}
          variant="subtle"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={3}
          mt={4}
        >
          <Box flexShrink={1}>
            <Alert.Icon />
          </Box>
          <Text fontSize="md" fontWeight="medium" flexShrink={1} ml={2}>
            {alertTitle}
          </Text>
          <IconButton
            icon={<CloseIcon size="3" />}
            onPress={() => setShowAlert(false)}
            _text={{ color: 'coolGray.600' }}
            alignSelf="flex-start"
          />
        </Alert>
      )}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Signup;
