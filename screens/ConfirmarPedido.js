import React, { useState } from 'react';
import { Text, StyleSheet, Linking, Alert, Modal, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button, Box } from 'native-base';
import useUser from '../contexts/userContext';

const ConfirmarPedido = () => {
  const route = useRoute();
  const user = useUser(state => state.user);
  const [modalVisible, setModalVisible] = useState(false);
  const handleEnviarPedido = () => {
    const numeroWhatsApp = '+5581991988963'; // Número de exemplo fornecido

    const mensagem = `Pedido: ${route.params.pizza_nome}\nValor: R$ ${route.params.pizza_valor}\n----------------------------------------------\nNome: ${user.nome}\nEmail: ${user.email}\nTelefone: ${user.telefone ?? "Insira seu telefone"}\nEndereco: ${user.endereco ?? "Insira seu endereço"}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    setModalVisible(true);
    Linking.openURL(url)
      .then(() => {
        console.log('Mensagem enviada com sucesso!');
        setModalVisible(false);
      })
      .catch((error) => {
        console.error('Erro ao enviar a mensagem:', error);
        Alert.alert('Erro ao enviar a mensagem');
        setModalVisible(false);
      });
  };

  return (
    <Box style={styles.container}>
      <Box alignItems='center' marginY='5'>
        <Text style={styles.title}>Pedido:</Text>
        <Text style={styles.text}> {route.params.pizza_nome} </Text>
        <Text style={styles.text}>Valor: R$ {route.params.pizza_valor} </Text>
      </Box>
      <Box alignItems='center' marginY='5'>
        <Text style={styles.user}>Nome: {user.nome} </Text>
        <Text style={styles.user}>Email: {user.email} </Text>
        <Text style={styles.user}>Telefone: {user.telefone ?? "Insira seu endereço"}</Text>
        <Text style={styles.user}>Endereco: {user.endereco ?? "Insira seu telefone"}</Text>
      </Box>
      <Box width='sm' height='md'>
        <Button bg='blue.900' _text={{ color: 'white', fontSize: '20', fontWeight: 'bold' }} onPress={() => setModalVisible(true)}>
          Enviar Pedido
        </Button>
      </Box>
      <Modal visible={modalVisible} animationType='slide' transparent>
        <View style={styles.modalContainer}>
        {/* <Text style={styles.modalTitle}>Confirmação</Text> */}
          <Text style={styles.modalText}>Você tem certeza que quer confirmar o pedido?</Text>
          <View style={styles.modalButtonContainer}>
            <Button
              bg='red.500'
              _text={{ color: 'white', fontSize: '16', fontWeight: 'bold' }}
              onPress={() => setModalVisible(false)}
              marginRight={2}
            >
              Cancelar
            </Button>
            <Button
              bg='green.500'
              _text={{ color: 'white', fontSize: '16', fontWeight: 'bold' }}
              onPress={handleEnviarPedido}
              marginLeft={2}
            >
              Enviar
            </Button>
          </View>
        </View>
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 30,
  },
  user: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    width: '80%',
    height: '20%',
    alignSelf: 'center',
    marginTop: '70%'
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
});

export default ConfirmarPedido;