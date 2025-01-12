import { Box, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Frame from '../assets/frame.svg';

export default function Card() {
  return (
    <Box mt={5} p={4} bg="rgba(0, 82, 254, 1)" borderRadius="20px" boxShadow="lg" width={'450px'}>
      <Flex direction="column" align="center" justify="center" textAlign="center">
        <Heading as="h3" size="lg" mb={4} p={'20px 40px'} color={'white'}>
          Get Started with KoinX for FREE
        </Heading>
        <Text mb={4} color={'#fff'} p={'20px 30px'}>
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </Text>
        <Image 
          src={Frame}
          alt="KoinX"
          mb={4}
        />
        <Button 
          colorScheme="black"
          color={'#000'}
          bgColor="white"
          rightIcon={<ArrowForwardIcon />}
          _hover={{
            bgColor: "gray.100", 
            boxShadow: "md",     
          }}
          mb={30}
        >
          Get Started Now
        </Button>
      </Flex>
    </Box>
  );
}
