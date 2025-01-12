import React from 'react';
import { Box, Flex, Image, Button, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, IconButton, Text, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" p={'0 40px'} bg="white" color="black" boxShadow="0px 4px 6px #0e0e0e36">
      <Flex justify="space-between" align="center">
        <Image src={Logo} alt="Logo" />
        <Flex display={{ base: 'none', md: 'flex' }} align="center" gap="4">
          <Link href="/" style={{ color: 'black', textDecoration: 'none' }}>
            <Text fontWeight="bold" fontSize="lg">Crypto Taxes</Text>
          </Link>
          <Link href="/about" style={{ color: 'black', textDecoration: 'none' }}>
            <Text fontWeight="bold" fontSize="lg">Free Tools</Text>
          </Link>
          <Link href="/contact" style={{ color: 'black', textDecoration: 'none' }}>
            <Text fontWeight="bold" fontSize="lg">Resource Center</Text>
          </Link>
          <Button 
            sx={{
              background: 'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)',
              color: 'white'
            }}
            _hover={{
              background: 'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)',
              opacity: '0.8'
            }}
            fontWeight="bold"
          >
            Get Started
          </Button>
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="Open Menu"
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex direction="column" gap="4" mt="8">
              <Link href="/" style={{ color: 'black', textDecoration: 'none' }}>
                <Text fontWeight="bold" fontSize="xl">Crypto Taxes</Text>
              </Link>
              <Link href="/about" style={{ color: 'black', textDecoration: 'none' }}>
                <Text fontWeight="bold" fontSize="xl">Free Tools</Text>
              </Link>
              <Link href="/contact" style={{ color: 'black', textDecoration: 'none' }}>
                <Text fontWeight="bold" fontSize="xl">Resource Center</Text>
              </Link>
              <Button 
                sx={{
                  background: 'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)',
                  color: 'white'
                }}
                _hover={{
                  background: 'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)',
                  opacity: '0.8'
                }}
                fontWeight="bold"
              >
                Get Started
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
