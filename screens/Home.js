import React, { useState } from 'react';
import { View } from "native-base";
import useUser from '../contexts/userContext';
import Header from '../components/Header';
import ListPizzas from '../components/ListPizzas';

const Home = () => {
  const user = useUser(state => state.user);

  const [search, setSearch] = useState('');
  return (
    <View justifyContent='center' py={10}>
      <Header search={search} setSearch={setSearch} nome={user.nome}/>
      <ListPizzas setSearch={setSearch} search={search} />
    </View>
  );
};

export default Home;