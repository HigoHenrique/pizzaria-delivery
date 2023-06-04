import { useNavigation } from "@react-navigation/native";
import {  Image, Text, View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CardPizza({ item }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {navigation.navigate("ConfirmarPedido", item)}}>
      <View
        m={2}
        py={3}
        px={1}
        backgroundColor="white"
        flexDirection="row"
        justifyContent="space-between"
        borderRadius={25}
      >
        <View
          width="35%"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={{
              uri: item.pizza_imagem,
            }}
            alt="Imagem de pizza"
          />
        </View>
        <View width="65%">
          <View>
            <Text fontSize={18} fontWeight="bold">
              {item.pizza_nome}
            </Text>
            <Text>{item.pizza_descricao}</Text>
          </View>

          {/*<View flexDirection="row">
            <Button bg="amber.600" width={20}>
              ---
            </Button>
            <View width={8}>
              <Text fontWeight="bold" fontSize={20} textAlign="center">
                1
              </Text>
            </View>
            <Button bg="amber.600" width={20}>
              +
            </Button>
          </View>*/}
        </View>
      </View>
    </TouchableOpacity>
  );
}
