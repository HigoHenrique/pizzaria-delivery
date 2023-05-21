import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Order = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>De principio temos o objetivo de criar um sistema de delivery para pizzarias, na qual o usuario ira fazer seu pedido e após concluir sera enviado para o Whatsapp da empresa o pedido completo </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Order;