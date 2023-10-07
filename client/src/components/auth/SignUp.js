import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  FormControl,
  useToast,
  VStack,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import CityLogo from '..//../assets/logos/CityLogo.png';

const SignUp = ({ handleToggle }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);

    if (!email || !password || !phoneNumber) {
      toast({
        title: 'Please fill in all fields.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
      return;
    }

    try {
      const userData = { email, password, phoneNumber };
      console.log(userData);
      const response = await axios.post('http://localhost:5000/api/user/registration', userData); // Replace with the correct API endpoint

      toast({
        title: 'Account created successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });

      localStorage.setItem('userInfo', JSON.stringify(response.data));
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setLoading(false);
      history.push('/signin');
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error creating account',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
    }
  };

  return (
    <VStack width="550px" ml="auto" mr="auto" spacing="5px" color="black">
      <HStack alignSelf="flex-start" spacing="2">
        <IconButton icon={<ArrowBackIcon />} aria-label="Back to Login" onClick={handleToggle} />
        <img src={CityLogo} alt="Company Logo" height={8} />
      </HStack>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>

      <FormControl id="phone" isRequired>
        <FormLabel>Phone Number</FormLabel>
        <PhoneInput
          defaultCountry="BD"
          useNationalFormatForDefaultCountryValue={true}
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Signup
      </Button>
    </VStack>
  );
};

export default SignUp;
