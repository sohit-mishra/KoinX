import React, { useState } from 'react';
import {
  Flex,
  Button,
  useColorModeValue,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

export default function Insight() {

  const [activeTab, setActiveTab] = useState('Overview');

 
  const tabs = [
    'Overview',
    'Fundamentals',
    'News Insights',
    'Sentiments',
    'Team',
    'Technicals',
    'Tokenomics',
  ];

  
  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Text fontSize="lg">This is the Overview content.</Text>;
      case 'Fundamentals':
        return <Text fontSize="lg">Here are the Fundamentals details.</Text>;
      case 'News Insights':
        return <Text fontSize="lg">Latest news insights will be displayed here.</Text>;
      case 'Sentiments':
        return <Text fontSize="lg">Sentiment analysis data will go here.</Text>;
      case 'Team':
        return <Text fontSize="lg">Meet the team behind the project.</Text>;
      case 'Technicals':
        return <Text fontSize="lg">Technical analysis and charts.</Text>;
      case 'Tokenomics':
        return <Text fontSize="lg">Tokenomics and distribution details.</Text>;
      default:
        return <Text fontSize="lg">Welcome to the Insights section.</Text>;
    }
  };

  return (
    <Box>
    
      <Flex
        direction="row"
        borderRadius="md"
        overflow="hidden"
        w="100%"
        pb={2}
        borderBottom="1px solid #e7dbdb"
        bg={useColorModeValue('white', 'gray.800')}
      >
        {tabs.map((item, index) => (
          <Button
            key={index}
            flex="1"
            variant="unstyled"
            bg={useColorModeValue('white', 'gray.800')}
            py={4}
            fontSize="sm"
            fontWeight="semibold"
            onClick={() => setActiveTab(item)}
            color={activeTab === item ? 'blue.500' : 'gray.600'}
            position="relative"
            _hover={{
              color: 'blue.500',
            }}
            _active={{
              bg: useColorModeValue('gray.100', 'gray.700'),
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            {item}
           
            {activeTab === item && (
              <Box
                position="absolute"
                bottom="-9px"
                left="0"
                right="0"
                height="2px"
                bg="blue.500"
                borderRadius="md"
              />
            )}
          </Button>
        ))}
      </Flex>

    
      <Box mt={8} p={4} borderRadius="md" bg={useColorModeValue('gray.50', 'gray.700')}>
        <Heading size="lg" mb={4}>
          {activeTab}
        </Heading>
        {renderContent()}
      </Box>
    </Box>
  );
}
