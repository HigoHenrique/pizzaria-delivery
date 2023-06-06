import { Box, Heading, Input, SearchIcon } from "native-base";

export default function Header({ nome, search, setSearch }) {

  return (
    <Box
      flexDirection="row"
      alignItems="center"
    >
      <Heading fontSize="lg" fontWeight="extrabold" marginX="8">
        Olá, {nome}
      </Heading>
      <Input
        fontSize='md'
        value={search}
        onChangeText={setSearch}
        variant="unstyled"
        placeholder="buscar pizza"
        width="70%"
        height="70px"
        InputLeftElement={<SearchIcon size="5" mt="0.5" />}
      />
    </Box>
  );
}
