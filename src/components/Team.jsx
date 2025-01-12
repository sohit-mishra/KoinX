import John from '../assets/john.png';
import Sandeep from '../assets/sandeep.png';
import Men from '../assets/men.png';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';

const Team = () => {
  return (
    <Box p="40px" bg="white" color="black">
      <Heading as="h1" size="2xl" mb={4}>
        Team
      </Heading>
      <Text fontSize="lg" mb={8}>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh.
        Eget mattis in mi integer sit egestas. Proin tempor id pretium quam.
        Facilisis purus convallis quam augue.
      </Text>

      <Flex direction="column" gap={8}>
        <Box display="flex" alignItems="center" gap={4}>
          <Flex flexDirection="column" alignItems="center" width={500}>
            <Image src={Men} alt="John Smith" borderRadius="10px" boxSize="150px" mt={10}/>
            <Heading as="h3" size="sm" mt={2}>John Smith</Heading>
            <Text fontSize={'sm'}>Designation here</Text>
          </Flex>
          <Box ml={4}>
            <Text mt={2}>
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
              nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
              neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
              quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor
              est ipsum. Malesuada etiam mi gravida praesent interdu
            </Text>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={4}>
          <Flex flexDirection="column" alignItems="center" width={500}>
            <Image src={Sandeep} alt="Elina Williams" borderRadius="10px" mt={10} boxSize="150px" />
            <Heading as="h3" size="sm" mt={2}>Elina Williams</Heading>
            <Text fontSize={'sm'}>Designation here</Text>
          </Flex>
          <Box ml={4}>
            <Text mt={2}>
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
              nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
              neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
              quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor
              est ipsum. Malesuada etiam mi gravida praesent interdu
            </Text>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={4}>
          <Flex flexDirection="column" alignItems="center" width={500}>
            <Image src={John} alt="John Smith" borderRadius="10px" boxSize="150px" mt={10} />
            <Heading as="h3" size="sm" mt={2}>John Smith</Heading>
            <Text fontSize={'sm'}>Designation here</Text>
          </Flex>
          <Box ml={4}>
            <Text mt={2}>
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
              nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
              neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
              quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor
              est ipsum. Malesuada etiam mi gravida praesent interdu
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Team;
