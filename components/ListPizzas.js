import { ActivityIndicator, TouchableOpacity } from "react-native";
import { FlatList, Text } from "native-base";
import { getPizzas } from "../api/pizza.js";
import { useQuery } from "@tanstack/react-query";
import CardPizza from "./CardPizza.js";
import { useEffect, useState } from "react";

export default function ListPizzas({search}) {
  const { data, refetch, error, loading } = useQuery({
    queryKey: ["pizzas"],
    queryFn: getPizzas,
  });
  const [listaPizza, setListaPizza] = useState(data);

  useEffect(() =>{
      const listaFiltrada = data.filter(pizza =>{ 
        const nomeDaPizza = pizza.pizza_nome.toLowerCase()
        const pesquisa = search.toLowerCase()
        if(nomeDaPizza.includes(pesquisa)){
          return pizza
        }})
        setListaPizza(listaFiltrada)
    if(listaPizza.length === 0){
      setListaPizza(data)
    }
  },[search])

  if (error) {
    return (
      <TouchableOpacity onPress={refetch} style={{ backgroundColor: "red" }}>
        <Text>{error.message}</Text>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
      <FlatList
        data={listaPizza}
        renderItem={({item}) => <CardPizza item={item} />}
        contentContainerStyle={{
          backgroundColor: "silver",
        }}
      />
  );
}
