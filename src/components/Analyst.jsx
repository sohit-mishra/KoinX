import React from 'react'
import { Box, Flex, Text, Heading, Divider } from '@chakra-ui/react';


export default function Analyst() {
  return (
    <Box>
    <Heading as="h4" fontWeight="bold" mb={4}>
      Analyst Estimates
    </Heading>

    <Flex justify="flex-start" align="center" mb={4} mt={10}>
      <Text fontSize="5xl" fontWeight="bold" color="green.500" ml={10}>
        76%
      </Text>

      <Box ml={20} width="50%">
        <Flex align="center" mb={2}>
          <Text mr={2} fontSize="md" fontWeight="semibold" width="50px">
            Buy
          </Text>
          <Divider w="76%" h="10px" bg="rgba(0, 179, 134, 1)" mr={2} borderRadius="md" opacity={1} />
          <Text fontSize="sm">76%</Text>
        </Flex>

        <Flex align="center" mb={2}>
          <Text mr={2} fontSize="md" fontWeight="semibold" width="50px">
            Sell
          </Text>
          <Divider w="8%" h="10px" bg="rgba(199, 200, 206, 1)" mr={2} opacity={1}borderRadius="md" />
          <Text fontSize="sm">8%</Text>
        </Flex>

        <Flex align="center">
          <Text mr={2} fontSize="md" fontWeight="semibold" width="50px">
            Hold
          </Text>
          <Divider w="16%" h="10px" bg="rgba(247, 50, 76, 1)" mr={2} opacity={1}borderRadius="md" />
          <Text fontSize="sm">16%</Text>
        </Flex>
      </Box>
    </Flex>
  </Box>
  )
}
