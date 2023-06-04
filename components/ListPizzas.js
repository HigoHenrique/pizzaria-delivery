import { ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { Button, FlatList, Text, View } from "native-base";
import { getPizzas } from "../api/pizza.js";
import { useQuery } from "@tanstack/react-query";
import CardPizza from "./CardPizza.js";

export default function ListPizzas() {
  const { data, refetch, error, loading } = useQuery({
    queryKey: ["pizzas"],
    queryFn: getPizzas,
  });

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
        data={data}
        renderItem={({item}) => <CardPizza item={item} />}
        contentContainerStyle={{
          backgroundColor: "silver",
        }}
      />
  );
}
