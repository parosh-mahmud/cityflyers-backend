


import React, { useState } from 'react';
import { useAuth } from '..//../firebaseconfig';
import SignUp from './SignUp';
import {
  FormControl,
  VStack,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
  Icon,
  Link, // Added useToast
} from '@chakra-ui/react';
import GoogleLogo from '..//../assets/logos/GoogleLogo.png'
import googleLogo1 from '..//../assets/logos/googleLogo1.png'


import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast(); // Initialize useToast
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // Initial

  const handleClick = () => setShow(!show);

const { signInWithGoogle, signInWithEmailAndPassword } = useAuth(); // You need to implement useAuth hook

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };



  const submitHandler = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        toast({
          title: 'Please fill in all fields',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post('/api/user/login', { email, password }, config);
      toast({
        title: 'Login successful',
        
        status:'success',
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      history.push("/chats");
      // Clear the form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: 'Login failed',
        description: error.response?.data.message || 'An error occurred during login',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      
    }finally{
      setLoading(false);
    }
  };

  return (


    <VStack width="550px" ml="auto" mr="auto" spacing="5px" color="black">
      
      <Button width="100%" onClick={handleGoogleSignIn} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={GoogleLogo} alt="Google Logo" width="20" height="20" style={{ marginRight: '10px' }} />
        Login with Google
      </Button>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder="Enter your Password"
            value={password}
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
        Login
      </Button>
{/* <FormControl id="signup-link">
        <Link to="/signup">Don't have an Account? Sign Up.</Link>
      </FormControl> */}
     
      

    </VStack>
  );
};

export default Login;








