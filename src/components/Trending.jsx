import { Box, Heading, Flex, Image, Text, Icon } from '@chakra-ui/react';
import Ethereum from '../assets/Ethereum.svg';
import Bitcoin from '../assets/Bitcoin.svg';
import Polygon from '../assets/Polygon.svg';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

export default function Trending() {
    return (
        <Box mt={5} p="40px" bg="gray.100" borderRadius="md" width={'450px'}>
            <Heading as="h3" size="lg" mb={4}>
                Trending Coins (24h)
            </Heading>

            <Flex align="center" justify="space-between" mb={4}>
                <Flex align="center">
                    <Image src={Ethereum} alt="Ethereum" boxSize="30px" mr={4} />
                    <Text fontWeight="bold" mr={2}>Ethereum (ETH)</Text>
                </Flex>
                <Flex align="center">
                    <Icon as={TriangleUpIcon} color="green.500" boxSize={4} />
                    <Text color="green.500" mr={2}>+2.56%</Text>
                    
                </Flex>
            </Flex>

            <Flex align="center" justify="space-between" mb={4}>
                <Flex align="center">
                    <Image src={Bitcoin} alt="Bitcoin" boxSize="30px" mr={4} />
                    <Text fontWeight="bold" mr={2}>Bitcoin (BTC)</Text>
                </Flex>
                <Flex align="center">
                    <Icon as={TriangleDownIcon} color="red.500" boxSize={4} />
                    <Text color="red.500" mr={2}>-5.26%</Text>
                </Flex>
            </Flex>

            <Flex align="center" justify="space-between" mb={4}>
                <Flex align="center">
                    <Image src={Polygon} alt="Polygon" boxSize="30px" mr={4} />
                    <Text fontWeight="bold" mr={2}>Polygon (MATIC)</Text>
                </Flex>
                <Flex align="center">
                    <Icon as={TriangleUpIcon} color="green.500" boxSize={4} />
                    <Text color="green.500" mr={2}>+8.21%</Text>
                </Flex>
            </Flex>
        </Box>
    );
}
