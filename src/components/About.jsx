import { Box, Heading, Text, Divider, Button, Flex, Image } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ImageFirst from '../assets/Image1.svg'; 
import ImageSecond from '../assets/Image2.svg'; 

export default function About() {
  return (
    <Box mt={5} p="40px" bg="white" color="black" width="100%">
      <Heading as="h3" size="xl" mb={6}>About Bitcoin</Heading>

      <Heading as="h4" size="xl" mb={4}>What is Bitcoin?</Heading>
      <Text fontSize="lg" mb={4}>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. 
        It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. 
        BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
      </Text>

      <Divider mb={6} borderColor="#bac0c7" />

      <Heading as="h4" size="lg" mb={4}>Lorem ipsum dolor sit amet</Heading> 
      <Text fontSize="md" mb={4}>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. 
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. 
        Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
      </Text>

      <Text fontSize="md" mb={4}>
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis 
        pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. 
        Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis 
        lobortis phasellus. Integer pellentesque enim convallis ultricies at.
      </Text>

      <Text fontSize="md" mb={4}>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. 
        Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
      </Text>

      <Divider mb={6} borderColor="#bac0c7" />

      <Heading as="h3" size="xl" mb={6}>Already Holding Bitcoin?</Heading>

      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" mb={10} gap={4}>
  
        <Box 
          flex="1" 
          bg="linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)"
          p={4} 
          borderRadius="md" 
          boxShadow="md"
        >
          <Flex alignItems="center" justify="flex-start">
            <Image src={ImageFirst} alt="Bitcoin" mb={0} boxSize="150px" />
            <Box ml={4}>
              <Text fontWeight="bold" fontSize={'x-large'} pr={10} mb={2} color={'white'}>Calculate your Profits</Text>
              <Button 
                colorScheme="blue" 
                color={'#000'} 
                bg={"white"} 
                rightIcon={<ArrowForwardIcon />}
                _hover={{
                  bg: 'gray.200', 
                  transform: 'scale(1.05)', 
                  transition: 'all 0.2s ease-in-out', 
                }}
              >
                Check Now
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box 
          flex="1" 
          bg="linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)"
          p={4} 
          borderRadius="md" 
          boxShadow="md"
        >
          <Flex alignItems="center" justify="space-between">
            <Image src={ImageSecond} alt="Bitcoin" mb={0} boxSize="150px" />
            <Box ml={4}>
              <Text fontWeight="bold" fontSize={'x-large'} pr={10} mb={2} color={'white'}>Calculate your Profits</Text>
              <Button 
                colorScheme="blue" 
                color={'#000'} 
                bg={"white"} 
                rightIcon={<ArrowForwardIcon />}
                _hover={{
                  bg: 'gray.200', 
                  transform: 'scale(1.05)', 
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Check Now
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Text fontSize="md" mb={4}>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
      </Text>
    </Box>
  );
}
