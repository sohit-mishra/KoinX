import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import John from '../assets/john.png';
import Sandeep from '../assets/sandeep.png';
import Men from '../assets/men.png';

const Team = () => {
  return (
    <Box p={{ base: '20px', md: '40px' }} bg="white" color="black" width="100%">
      {/* Header */}
      <Heading as="h1" size={{ base: 'xl', md: '2xl' }} mb={4} textAlign={{ base: 'center', md: 'left' }}>
        Team
      </Heading>
      <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} textAlign={{ base: 'center', md: 'left' }}>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh.
        Eget mattis in mi integer sit egestas. Proin tempor id pretium quam.
        Facilisis purus convallis quam augue.
      </Text>

      {/* Team Members */}
      <Flex direction="column" gap={8}>
        {/* Member 1 */}
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          alignItems="center" 
          gap={4} 
          p={4} 
          boxShadow="md" 
          borderRadius="lg"
        >
          <Image 
            src={Men} 
            alt="John Smith" 
            borderRadius="10px" 
            boxSize={{ base: '120px', md: '150px' }} 
            mb={{ base: 4, md: 0 }}
          />
          <Box>
            <Heading as="h3" size="md" mb={2} textAlign={{ base: 'center', md: 'left' }}>
              John Smith
            </Heading>
            <Text fontSize="sm" mb={2} textAlign={{ base: 'center', md: 'left' }}>
              Designation here
            </Text>
            <Text textAlign="justify">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
              nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
              neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
              quis consectetur.
            </Text>
          </Box>
        </Flex>

        {/* Member 2 */}
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          alignItems="center" 
          gap={4} 
          p={4} 
          boxShadow="md" 
          borderRadius="lg"
        >
          <Image 
            src={Sandeep} 
            alt="Elina Williams" 
            borderRadius="10px" 
            boxSize={{ base: '120px', md: '150px' }} 
            mb={{ base: 4, md: 0 }}
          />
          <Box>
            <Heading as="h3" size="md" mb={2} textAlign={{ base: 'center', md: 'left' }}>
              Elina Williams
            </Heading>
            <Text fontSize="sm" mb={2} textAlign={{ base: 'center', md: 'left' }}>
              Designation here
            </Text>
            <Text textAlign="justify">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
              nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
              neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
              quis consectetur.
            </Text>
          </Box>
        </Flex>

        {/* Member 3 */}
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          alignItems="center" 
          gap={4} 
          p={4} 
          boxShadow="md" 
          borderRadius="lg"
        >
          <Image 
            src={John} 
            alt="John Smith" 
            borderRadius="10px" 
            boxSize={{ base: '120px', md: '150px' }} 
            mb={{ base: 4, md: 0 }}
          />
          <Box>
            <Heading as="h3" size="md" mb={2} textAlign={{ base: 'center', md: 'left' }}>
              John Smith
            </Heading>
            <Text fontSize="sm" mb={2} textAlign={{ base: 'center', md: 'left' }}>
              Designation here
            </Text>
            <Text textAlign="justify">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
              nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
              neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
              quis consectetur.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Team;
