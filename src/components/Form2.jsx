import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Button,
	useColorModeValue,
	Radio,
	RadioGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Form({ onSubmit }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [number, setNumber] = useState('');
	const [validUntil, setValidUntil] = useState('');
	const [language, setLanguage] = useState('1');


	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(typeof language)
		onSubmit(language, firstName, lastName, number, validUntil);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Flex justify='start' direction='column'>
				<Box
					bg={useColorModeValue('white', 'gray.700')}
					borderRadius='lg'
					p={8}
					color={useColorModeValue('gray.700', 'whiteAlpha.900')}
					shadow='base'
				>	
					<RadioGroup onChange={setLanguage} value={language}>
						<Flex align='center' gap={5} w="100%" h="55px">
							<Radio value='1' verticalAlign='middle' h="100%">English</Radio>
							<Radio value='2' verticalAlign='middle' h="100%">German</Radio>
						</Flex>
					</RadioGroup>
					<FormControl>
						<FormLabel>
							First Name:
							<Input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
						</FormLabel>
					</FormControl>
					<FormControl>
						<FormLabel>
							Last Name:
							<Input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
						</FormLabel>
					</FormControl>
					<FormControl>
						<FormLabel>
							Number:
							<Input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
						</FormLabel>
					</FormControl>
					<FormControl>
						<FormLabel>
							Valid Until:
							<Input
								type='text'
								value={validUntil}
								onChange={(e) => setValidUntil(e.target.value)}
							/>
						</FormLabel>
					</FormControl>
					<Button
						type='submit'
						colorScheme='blue'
						bg='blue.400'
						color='white'
						_hover={{
							bg: 'blue.500',
						}}
					>
						Submit
					</Button>
				</Box>
			</Flex>
		</form>
	);
}

export default Form;
