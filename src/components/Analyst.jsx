import React from 'react';
import { Box, Flex, Text, Heading, Divider } from '@chakra-ui/react';

export default function Analyst() {
  return (
    <Box p={{ base: 4, md: 6 }} bg="gray.50" borderRadius="md" boxShadow="sm">
      <Heading as="h4" fontWeight="bold" mb={6} textAlign={{ base: 'center', md: 'left' }}>
        Analyst Estimates
      </Heading>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={{ base: 'center', md: 'flex-start' }}
        mb={4}
      >
        <Text
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight="bold"
          color="green.500"
          textAlign={{ base: 'center', md: 'left' }}
        >
          76%
        </Text>

        <Box ml={{ base: 0, md: 20 }} mt={{ base: 6, md: 0 }} width={{ base: '100%', md: '50%' }}>
          <Flex align="center" mb={4}>
            <Text mr={2} fontSize="md" fontWeight="semibold" width="50px">
              Buy
            </Text>
            <Divider
              flex={1}
              h="10px"
              bg="rgba(0, 179, 134, 1)"
              mr={2}
              borderRadius="md"
              opacity={1}
            />
            <Text
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              textAlign={{ base: 'center', md: 'right' }}
            >
              76%
            </Text>
          </Flex>

          <Flex align="center" mb={4}>
            <Text mr={2} fontSize="md" fontWeight="semibold" width="50px">
              Sell
            </Text>
            <Divider
              flex={1}
              h="10px"
              w={'8%'}
              bg="rgba(199, 200, 206, 1)"
              mr={2}
              borderRadius="md"
              opacity={1}
            />
            <Text fontSize="sm">8%</Text>
          </Flex>

          <Flex align="center">
            <Text mr={2} fontSize="md" fontWeight="semibold" width="50px">
              Hold
            </Text>
            <Divider
              flex={1}
              h="10px"
              w={'16%'}
              bg="rgba(247, 50, 76, 1)"
              mr={2}
              borderRadius="md"
              opacity={1}
            />
            <Text fontSize="sm">16%</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
