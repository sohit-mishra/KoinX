import React, { useState } from 'react';
import { Box, Flex, Text, Heading, Divider, Icon, Image, Button } from '@chakra-ui/react';
import { WarningIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Analyst from '../components/Analyst';
import NewsImage from '../assets/news.svg';
import UpImage from '../assets/up.svg';

export default function Sentiment() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Event data array
  const data = [
    {
      id: 1,
      image: NewsImage,
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
    },
    {
      id: 2,
      image: UpImage,
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del.',
    },
    {
      id: 3,
      image: NewsImage,
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
    },
    {
      id: 4,
      image: UpImage,
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del.',
    },
  ];

  // Handle Next Button Click
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % (data.length / 2));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <Box p={{ base: '20px', md: '40px' }} mt={5} bg="white" borderRadius="md" shadow="sm" w="100%">
      <Box mb={6}>
        <Heading as="h3" size="lg" fontWeight="bold" textAlign={{ base: 'center', md: 'left' }}>
          Sentiment
        </Heading>
        <Heading display="flex" as="h4" size="md" mt={5}>
          Key Events
          <Box
            as="span"
            width="30px"
            height="30px"
            borderRadius="50%"
            bg="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={-0.5}
            ml={1}
          >
            <Icon as={WarningIcon} color="gray" />
          </Box>
        </Heading>
      </Box>

      <Flex overflow="hidden" position="relative" width="100%" height={{ base: 'auto', md: '180px' }} direction={{ base: 'column', md: 'row' }}>
        <Flex
          position="absolute"
          direction="row"
          width="200%"
          transform={`translateX(-${current * 50}%)`}
          transition="transform 0.3s ease-in-out"
        >
          {data.map((event) => (
            <Box key={event.id} width={{ base: '100%', md: '50%' }} px={{ base: 2, md: 5 }} mb={{ base: 5, md: 0 }}>
              <Flex align="flex-start">
                <Box width={{ base: '20%', md: '18%' }}>
                  <Image src={event.image} alt="Event Image" w="100%" />
                </Box>
                <Box width="85%" pl={{ base: 2, md: 4 }}>
                  <Text fontSize="md" fontWeight="semibold" textAlign={{ base: 'center', md: 'left' }}>
                    {event.title}
                  </Text>
                  <Text fontSize="sm" mt={2} color="gray.600" textAlign="justify">
                    {event.paragraph}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>

        {/* Next Button */}
        {!isAnimating && (
          <Button
            position="absolute"
            borderRadius="full"
            right="10px"
            top="50%"
            transform="translateY(-50%)"
            backgroundColor="white"
            color="grey"
            _hover={{
              backgroundColor: 'grey',
              color: 'white',
            }}
            _focus={{
              boxShadow: 'none',
            }}
            padding="12px"
            onClick={handleNext}
          >
            <ChevronRightIcon fontSize={22} />
          </Button>
        )}
      </Flex>

      <Divider my={6} />

      <Analyst />
    </Box>
  );
}
