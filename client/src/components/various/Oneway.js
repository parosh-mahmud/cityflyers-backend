import { Flex, Radio, RadioGroup, Text } from '@chakra-ui/react'
import React from 'react'

const Oneway = () => {
  return (
    <div>
      {/* One way, Return, Multicity */}
              <Flex align="center" mb={4}>
                <RadioGroup defaultValue="oneWay">
                  <Radio value="oneWay" size="lg" colorScheme="teal">
                    <Text fontSize="lg">One Way</Text>
                  </Radio>
                  <Radio value="return" size="lg" colorScheme="teal">
                    <Text fontSize="lg">Return</Text>
                  </Radio>
                  <Radio value="multicity" size="lg" colorScheme="teal">
                    <Text fontSize="lg">Multicity</Text>
                  </Radio>
                </RadioGroup>
              </Flex>
    </div>
  )
}

export default Oneway
