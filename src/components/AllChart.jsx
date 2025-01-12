import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import BNB from '../components/Chart/BNB'; // Importing BNB component

export default function AllChart() {
  return (
    <Box width="100%" p={4}>
      <Flex
        justify="space-between" // Space out the items evenly
      
        width="100%"
      >
        {Array(5).fill(0).map((_, index) => (
          <Box key={index} width={{ base: "100%", sm: "48%", md: "18%" }} p={2} height={165} overflow={'hidden'}>
            <BNB />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
