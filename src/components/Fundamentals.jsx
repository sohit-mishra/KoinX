import React from 'react';
import { Box, Icon, Heading, Flex, Text } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

export default function Fundamentals() {
  const data = [
    { label: "Today's Low", value: "46,930.22" },
    { label: "Today's High", value: "49,343.83" },
    { label: "52W Low", value: "16,930.22" },
    { label: "52W High", value: "49,743.83" },
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "Market Cap Dominance", value: "38.343%" },
    { label: "Volume / Market Cap", value: "0.0718" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "All-Time High", value: "$69,044.77 (Nov 10, 2021)" },
    { label: "All-Time Low", value: "$67.81 (Jul 06, 2013)" },
  ];

  return (
    <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm" mx="auto">
      <Heading display="flex" as="h4" size="md" mb={4}>
        Fundamentals
        <Box
          as="span"
          width="30px"
          height="30px"
          borderRadius="50%"
          bg="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml={2}
        >
          <Icon as={WarningIcon} color="gray" />
        </Box>
      </Heading>

      {/* Wrap the section into 2 columns, each taking up 50% width */}
      <Flex flexWrap="wrap" justify="space-between">
        {data.map((item, index) => (
          <Flex
            key={index}
            justify="space-between"
            align="center"
            borderBottom="1px solid #e7dbdb"
            py={2}
            width="48%" // Set width to 48% for two items per row
            whiteSpace="nowrap"
            mb={2} // Add margin at the bottom for spacing
          >
            <Text fontSize="sm" fontWeight="semibold" color="gray.600">
              {item.label}
            </Text>
            <Text fontSize="sm" fontWeight="medium" color="gray.800">
              {item.value}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
