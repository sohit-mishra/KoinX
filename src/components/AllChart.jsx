// AllChart.jsx
import React from 'react';
import { Flex } from '@chakra-ui/react';
import BNB from '../components/Chart/BNB'; 

export default function AllChart() {
  return (
    <Flex
      wrap="nowrap" // Ensures all items are in one row
      justify="space-between"
      p={4}
      bg="gray.50"
    >
      {/* {Array(5).fill(0).map((_, index) => (
        <Flex
          key={index}
          width="19%"
          minWidth="180px"
          p={2}
        >
          <BNB />
        </Flex>
      ))} */}
    </Flex>
  );
}
