import React from 'react';
import { Box, Heading, Text, Flex, Divider } from '@chakra-ui/react';

export default function Performance() {
  return (
    <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
      <Heading as="h3" size="lg" mb={4}>
        Performance Overview
      </Heading>

      <Flex direction="column" gap={4}>
        <Flex  alignItems={'center'}>
          <Box width={'150px'}>
            <Text fontWeight="bold">Today’s Low</Text>
            <Text color="gray.600">46,930.22</Text>
          </Box>
          <Box flex="1">
            <Divider borderRadius={'10px'}
              height="10px"
              bg="linear-gradient(90deg, #FF4949 0%, #FF4E11 15.34%, #FC870A 30.45%, #FFAF11 48.68%, #C2CB21 62.75%, #11EB68 100.03%)"
              border="none" 
            />
          </Box>
          <Box width={'150px'} textAlign={'right'}>
            <Text fontWeight="bold">Today’s High</Text>
            <Text color="gray.600">49,343.83</Text>
          </Box>
        </Flex>

        <Flex alignItems={'center'}>
          <Box width={'150px'}>
            <Text fontWeight="bold">52W Low</Text>
            <Text color="gray.600">16,930.22</Text>
          </Box>
          <Box flex="1">
            <Divider borderRadius={'10px'}
              height="10px" 
              bg="linear-gradient(90deg, #FF4949 0%, #FF4E11 15.34%, #FC870A 30.45%, #FFAF11 48.68%, #C2CB21 62.75%, #11EB68 100.03%)"
              border="none" 
            />
          </Box>
          <Box width={'150px'}  textAlign={'right'}>
            <Text fontWeight="bold">52W High</Text>
            <Text color="gray.600">49,743.83</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
