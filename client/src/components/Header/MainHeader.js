import React, { useState } from 'react';
import {Link} from 'react-router-dom'
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
  Img,
  DrawerFooter,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import CityLogo from "..//../assets/logos/CityLogo.png";

const DashBoardHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchText, setSearchText] = useState('');
const btnRef = React.useRef()
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
        <Img src={CityLogo} alt="Company Logo" height={8} />

        {/* Search Bar */}
        <Input
          placeholder="Type here /name/PNR/reference"
          size="sm"
          width="512px"
          height={8}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Sign In Button */}
        <Link to="/signin">
          <Button variant="outline">Sign In</Button>
        </Link>
      </Flex>

      {/* Side Drawer */}
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashBoardHeader;
