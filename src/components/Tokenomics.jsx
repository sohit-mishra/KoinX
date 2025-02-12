import { Box, Text, Flex, Image, Circle } from '@chakra-ui/react';
import CircleImage from '../assets/Circle.svg';

export default function Tokenomics() {
  return (
    <Box p={{ base: '20px', md: '40px' }} bg="white" color="black" width="100%">
      {/* Title */}
      <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={4}>
        Tokenomics
      </Text>

      {/* Section Title */}
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={4}>
        Initial Distribution
      </Text>

      {/* Image and Distribution Info */}
      <Flex
        alignItems="center"
        gap={{ base: 2, md: 4 }}
        mb={4}
        direction={{ base: 'column', md: 'row' }}
      >
        <Image
          src={CircleImage}
          boxSize={{ base: '150px', md: '200px' }}
          alt="Initial Distribution Chart"
        />
        
        <Flex direction="column" gap={2}>
          <Flex alignItems="center" gap={2}>
            <Circle size="10px" bg="rgba(0, 130, 255, 1)" />
            <Text fontSize={{ base: 'sm', md: 'md' }}>Crowdsale Investors: 80%</Text>
          </Flex>

          <Flex alignItems="center" gap={2}>
            <Circle size="10px" bg="rgba(250, 160, 2, 1)" />
            <Text fontSize={{ base: 'sm', md: 'md' }}>Foundation: 20%</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Description Text */}
      <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="justify">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet
        enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce
        adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue.
        Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec.
        Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere
        facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
        odio nisi eu ac risus.
      </Text>
    </Box>
  );
}
