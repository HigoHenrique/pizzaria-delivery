import { Box, Heading, Input, SearchIcon, StatusBar, Text } from "native-base";

export default function Header({nome}) {
    return(
        <Box  flexDirection='row' alignItems='center' borderColor='black' borderWidth='2'>
            <Heading  fontSize='lg' fontWeight='extrabold' marginX='8' >Olá, {nome}</Heading >
            <Input variant='unstyled'  placeholder="buscar pizza" width='70%' height='70px' InputLeftElement={<SearchIcon size="5" mt="0.5"/>}/>
        </Box>
    )
};