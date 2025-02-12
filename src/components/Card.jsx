import { Box, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Frame from '../assets/Frame.svg';

export default function Card() {
  return (
    <Box 
      mt={5} 
      p={4} 
      bg="rgba(0, 82, 254, 1)" 
      borderRadius="20px" 
      boxShadow="lg" 
      width={{ base: '100%', sm: '400px', md: '450px' }} 
      maxWidth="100%"
    >
      <Flex direction="column" align="center" justify="center" textAlign="center">
        <Heading 
          as="h3" 
          size="lg" 
          mb={4} 
          p={{ base: '10px 20px', md: '20px 40px' }} 
          color="white" 
          fontSize={{ base: 'xl', md: '2xl' }}
        >
          Get Started with KoinX for FREE
        </Heading>

        <Text 
          mb={4} 
          color="#fff" 
          p={{ base: '10px 15px', md: '20px 30px' }} 
          fontSize={{ base: 'sm', md: 'md' }}
        >
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </Text>

        <Image 
          src={Frame} 
          alt="KoinX" 
          mb={4} 
          maxWidth={{ base: '70%', md: '80%' }} 
          height="auto"
        />

        <Button 
          colorScheme="black" 
          color="#000" 
          bgColor="white" 
          rightIcon={<ArrowForwardIcon />} 
          _hover={{
            bgColor: "gray.100", 
            boxShadow: "md",
          }}
          fontSize={{ base: 'sm', md: 'md' }} 
          mb={8}
        >
          Get Started Now
        </Button>
      </Flex>
    </Box>
  );
}
