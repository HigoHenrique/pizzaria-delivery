import React, { useState } from 'react';
import { View} from "native-base";
import useUser from '../contexts/userContext';
import Header from '../components/Header';
import ListPizzas from '../components/ListPizzas';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const user = useUser(state => state.user);
  const navigation = useNavigation();


  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const [search, setSearch] = useState('');
  return (
    <View justifyContent='center' py={10}>
      <Header search={search} setSearch={setSearch} nome={user.nome} handleLogout={handleLogout} />
      <ListPizzas setSearch={setSearch} search={search} />
    </View>
  );
};

export default Home;