import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Flex } from "native-base";
import useUser from '../contexts/userContext';
import Header from '../components/Header';

const Home = () => {
  const user = useUser(state => state.user);

  return (
    
    <Container width='lg' justifyContent='center'>
      <Header nome={user.nome}/>
      <Flex>
        
      </Flex>
    </Container>
  );
};