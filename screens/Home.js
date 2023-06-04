import React from 'react';
import { Container, View } from "native-base";
import useUser from '../contexts/userContext';
import Header from '../components/Header';
import ListPizzas from '../components/ListPizzas';

const Home = () => {
  const user = useUser(state => state.user);

  return (
    <View justifyContent='center' py={10}>
      <Header nome={user.nome}/>
      <ListPizzas />
    </View>
  );
};

export default Home;