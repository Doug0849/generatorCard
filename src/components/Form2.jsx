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
	const [number1, setNumber1] = useState('');
	const [number2, setNumber2] = useState('');
	const [number3, setNumber3] = useState('');
	const [number4, setNumber4] = useState('');
	const [validUntil, setValidUntil] = useState('');
	const [language, setLanguage] = useState('1');


	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(typeof language)
		onSubmit(language, firstName, lastName, number1, number2, number3, number4, validUntil);
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
							Number1:
							<Input type='text' value={number1} onChange={(e) => setNumber1(e.target.value)} />
						</FormLabel>
					</FormControl>
					<FormControl>
						<FormLabel>
							Number2:
							<Input type='text' value={number2} onChange={(e) => setNumber2(e.target.value)} />
						</FormLabel>
					</FormControl>
					<FormControl>
						<FormLabel>
							Number3:
							<Input type='text' value={number3} onChange={(e) => setNumber3(e.target.value)} />
						</FormLabel>
					</FormControl>
					<FormControl>
						<FormLabel>
							Number4:
							<Input type='text' value={number4} onChange={(e) => setNumber4(e.target.value)} />
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
