import { useNavigation } from "@react-navigation/native";
import {  Box, Image, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CardPizza({ item }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {navigation.navigate("ConfirmarPedido", item)}}>
      <Box
        m={2}
        py={3}
        px={1}
        backgroundColor="white"
        flexDirection="row"
        justifyContent="space-between"
        borderRadius={10}
      >
        <Box
          width="35%"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            style={{
              width: 110,
              height: 110,
              borderRadius: 15,
            }}
            source={{
              uri: item.pizza_imagem,
            }}
            alt="Imagem de pizza"
          />
        </Box>
        <Box width="67%">
          <Box>
            <Text fontSize={18} fontWeight="bold">
              {item.pizza_nome}
            </Text>
            <Text>{item.pizza_descricao}</Text>
            <Text fontSize={20} fontWeight="bold">R$ {item.pizza_valor}</Text>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
