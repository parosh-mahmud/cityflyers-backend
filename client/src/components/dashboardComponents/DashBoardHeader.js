import React, { useState } from 'react';
import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Button,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const DashBoardHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle search functionality here
    console.log(`Searching for: ${searchText}`);
  };

  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        paddingX={4}
        paddingY={2}
        height={12}
        boxShadow="md"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
        bg="white"
      >
        {/* Toggle Button */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Side Drawer"
          onClick={onOpen}
        />

        {/* Company Logo */}
        <Image src="/company-logo.png" alt="Company Logo" height={8} />

        {/* Search Bar */}
        <Input
          placeholder="Search"
          size="sm"
          width="512px"
          height={8}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Sign In Button */}
        <Button variant="outline">Sign In</Button>
      </Flex>

      {/* Side Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Side Drawer</DrawerHeader>
          <DrawerBody>
            {/* Add content for the side drawer */}
            {/* For example, navigation links */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashBoardHeader;
