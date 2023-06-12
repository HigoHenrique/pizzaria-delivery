import React from 'react';
import { Box, Heading, Input, SearchIcon, Button, Text, HStack, Flex } from 'native-base';

const Header = ({ nome, search, setSearch, handleLogout }) => {
  return (
    <Box py={4} px={2}>
      <HStack justifyContent="space-between" alignItems="center">
        <Heading fontSize="lg" fontWeight="extrabold">
          Olá, {nome}
        </Heading>
        <Button  colorScheme="red" onPress={handleLogout} width={79}>
          <Text fontSize={'md'} color={'white'}>Sair</Text>
        </Button>
      </HStack>
      <Flex alignItems="center">
        <Input
          fontSize="md"
          value={search}
          onChangeText={setSearch}
          variant="unstyled"
          placeholder="buscar pizza"
          width="100%"
          height="40px"
          InputLeftElement={<SearchIcon size="5" mt="0.5" />}
        />
      </Flex>
    </Box>
  );
};

export default Header;
