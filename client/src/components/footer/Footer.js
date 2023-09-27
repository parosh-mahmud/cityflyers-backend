// Footer.js

import React from 'react';
import {
  Box,
  Text,
  Link,
  Flex,
  VStack,
  Divider,
  Spacer, // Added Spacer for alignment
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.200" py="4" mt="50px">
      <Flex justify="center">
        <VStack spacing="2">
          <Text fontSize="lg">Discover</Text>
          <Link href="#">Home</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Talent & Culture</Link>
          <Link href="#">Refund Policy</Link>
          <Link href="#">EMI Policy</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Payment Methods</Link>
        </VStack>
        <Spacer /> {/* Add Spacer for alignment */}
        <VStack spacing="2">
          <Text fontSize="lg">Need Help ?</Text>
          <Link href="#">We are Always here for you!</Link>
          <Text>Knock us on Messenger anytime</Text>
          <Text>or Call our Hotline (10AM - 10PM).</Text>
        </VStack>
      </Flex>
      <Divider my="4" />
      <Flex justify="space-between" align="center" px="4">
        <Text>&copy; {new Date().getFullYear()} Cityflyers</Text>
        <VStack spacing="2">
          <Link href="#">Contact</Link>
          <Link href="mailto:info@Cityflyers.com">info@Cityflyers.com</Link>
          <Link href="tel:+88096******">+88 ********</Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
