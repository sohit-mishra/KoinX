import { Box, Heading, Flex, Image, Text, Icon } from '@chakra-ui/react';
import Ethereum from '../assets/Ethereum.svg';
import Bitcoin from '../assets/Bitcoin.svg';
import Polygon from '../assets/Polygon.svg';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

export default function Trending() {
  return (
    <Box 
      mt={5} 
      p={{ base: '20px', md: '40px' }} 
      bg="gray.100" 
      borderRadius="md" 
      width={{ base: '100%', sm: '400px', md: '450px' }}
      maxWidth="100%"
    >
      <Heading 
        as="h3" 
        size="lg" 
        mb={4} 
        fontSize={{ base: 'xl', md: '2xl' }}
      >
        Trending Coins (24h)
      </Heading>

      {/** Ethereum */}
      <Flex 
        align="center" 
        justify="space-between" 
        mb={4} 
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex align="center" mb={{ base: 2, sm: 0 }}>
          <Image src={Ethereum} alt="Ethereum" boxSize={{ base: '24px', md: '30px' }} mr={4} />
          <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} mr={2}>
            Ethereum (ETH)
          </Text>
        </Flex>
        <Flex align="center">
          <Icon as={TriangleUpIcon} color="green.500" boxSize={{ base: 3, md: 4 }} />
          <Text color="green.500" fontSize={{ base: 'sm', md: 'md' }} mr={2}>
            +2.56%
          </Text>
        </Flex>
      </Flex>

      {/** Bitcoin */}
      <Flex 
        align="center" 
        justify="space-between" 
        mb={4} 
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex align="center" mb={{ base: 2, sm: 0 }}>
          <Image src={Bitcoin} alt="Bitcoin" boxSize={{ base: '24px', md: '30px' }} mr={4} />
          <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} mr={2}>
            Bitcoin (BTC)
          </Text>
        </Flex>
        <Flex align="center">
          <Icon as={TriangleDownIcon} color="red.500" boxSize={{ base: 3, md: 4 }} />
          <Text color="red.500" fontSize={{ base: 'sm', md: 'md' }} mr={2}>
            -5.26%
          </Text>
        </Flex>
      </Flex>

      {/** Polygon */}
      <Flex 
        align="center" 
        justify="space-between" 
        mb={4} 
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex align="center" mb={{ base: 2, sm: 0 }}>
          <Image src={Polygon} alt="Polygon" boxSize={{ base: '24px', md: '30px' }} mr={4} />
          <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} mr={2}>
            Polygon (MATIC)
          </Text>
        </Flex>
        <Flex align="center">
          <Icon as={TriangleUpIcon} color="green.500" boxSize={{ base: 3, md: 4 }} />
          <Text color="green.500" fontSize={{ base: 'sm', md: 'md' }} mr={2}>
            +8.21%
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
