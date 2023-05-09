import { Box, Flex, FormControl, FormLabel, Input, Button, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [memberSince, setMemberSince] = useState('');
  const [validUntil, setValidUntil] = useState('');
  const [mvp, setMvp] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(
      name,
      number,
      memberSince,
      validUntil,
      mvp
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex justify="start" direction="column">
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          borderRadius="lg"
          p={8}
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          shadow="base"
        >
          <FormControl>
            <FormLabel>
              Name:
              <Input type="text" value={name} onChange={e => setName(e.target.value)} />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Number:
              <Input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Member Since:
              <Input type="text" value={memberSince} onChange={e => setMemberSince(e.target.value)} />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Valid Until:
              <Input type="date" value={validUntil} onChange={e => setValidUntil(e.target.value)} />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              MVP:
              <Input type="text" value={mvp} onChange={e => setMvp(e.target.value)} />
            </FormLabel>
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            bg="blue.400"
            color="white"
            _hover={{
              bg: 'blue.500',
            }}
            isFullWidth
          >
            Submit
          </Button>
        </Box>
      </Flex>
    </form>
  );
}

export default Form;
