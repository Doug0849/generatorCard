import { React } from 'react';
import { Box, Flex, Heading, Stack, Text, useColorModeValue, VStack, HStack } from '@chakra-ui/react';
import Form2 from './Form2';
import ReactDOM from 'react-dom/client';
import {QRCodeCanvas} from 'qrcode.react';

function onSubmit(language, firstName, lastName, number, validUntil) {
  document.getElementById('firstName').innerText = firstName;
	document.getElementById('lastName').innerText = lastName;
	document.getElementById('number').innerText = number;
	document.getElementById('validThru').innerText = validUntil;
  const hansaBg = document.getElementById('hansaBg');
  if (language === '1') {
    hansaBg.style.backgroundImage = "url('/images/hansa_english_card.png')";
  } else {
    hansaBg.style.backgroundImage = "url('./images/hansa_german_card.png')";
  }

	// QRCord generation
	let qrcodeValue = `FFPC001LH${number}`
	let lastNameSpace = '00000000000000000000'
	lastNameSpace = lastNameSpace.substring(lastName.length , lastNameSpace.length)
	lastNameSpace = `${lastName}${lastNameSpace}`
	lastNameSpace = lastNameSpace.replaceAll('0', ' ')
	let firstNameSpace = '00000000000000000000'
	firstNameSpace = firstNameSpace.substring(firstName.length , firstNameSpace.length)
	firstNameSpace = `${firstName}${firstNameSpace}`
	firstNameSpace = firstNameSpace.replaceAll('0', ' ')
	qrcodeValue += ` ${lastNameSpace}${firstNameSpace}LHG${validUntil.replace('/','')}  N      ^001'Miles & More'Lufthansa'HON'HON CIRCLE'0'${lastName}'${firstName}^`
	const container = document.getElementById('mountNode');
	const root = ReactDOM.createRoot(container);
	root.render(<QRCodeCanvas value={qrcodeValue} />);
}

function MemberCard2() {

	return (
		<Flex
			bg={useColorModeValue('gray.100', 'gray.900')}
			align='center'
			justify='center'
			css={{
				backgroundAttachment: 'fixed',
			}}
			id='contact'
			m='0'
		>
			<Box borderRadius='lg' m={{ base: 5, md: 5, lg: 5 }} p={{ base: 5, lg: 5 }}>
				<Box>
					<VStack spacing={{ base: 5, md: 5, lg: 5 }}>
						<Heading
							fontSize={{
								base: '4xl',
								md: '5xl',
							}}
						>
							Lufthansa Card Generator
						</Heading>
						<Stack
							mrt='10px'
							spacing={{ base: 5, md: 5, lg: 5 }}
							direction={{ base: 'column', md: 'row' }}
						>
							<Form2 onSubmit={onSubmit}></Form2>
							<Box id='capture'>
								<VStack
									id='hansaBg'
									w='390px'
									h='669px'
									bgImage="url('/images/hasatest.png')"
									bgSize='cover'
									bgPosition='center'
									bgRepeat='no-repeat'
									align='start'
									justify='start'
									direction={{ base: 'row', md: 'column' }}
								>
									<Flex ml='58px' mt='112px' h='auto' w='390px' direction="column" justify="flex-start"  align="flex-start">
										<Text
											id='firstName'
											className='memberName'
											textAlign='start'
											mb='-8px'
											color='#fbfbfb'
											fontSize='24px'
											fontFamily='Roboto-Regular'
											fontWeight="500"
											lineHeight='30.3px'
											transform='scaleX(1.038)'
										>
											MATTHIAS
										</Text>
										<Text
											id='lastName'
											className='memberName'
											ml="-2.2px"
											mt="8px"
											textAlign='start'
											color='#fbfbfb'
											fontSize='24px'
											fontFamily='Roboto-Regular'
											fontWeight="500"
											lineHeight='30.3px'
											transform='scaleX(1)'>
											CABA
										</Text>
									</Flex>
									<Flex pt="46px" w='390px'
									justify="space-between">
										<HStack ml="56px">
											<span
												id='number'
												className='memberNumber'
												style={{
													wordSpacing: '1.3px',
													color:'#fbfbfb',
													h:'100%',
													fontSize:'16.6px',
													fontFamily:'LufthansaTextWeb-Light',
													lineHeight:'36px',
												}}
											>
												3330 3187 7843 962
											</span>
										</HStack>
										<Stack justify="end">
											<span
												id='validThru'
												className='validThru'
												style={{
													marginRight: '49px',
													color:'#fbfbfb',
													h:'100%',
													fontSize:'18px',
													fontFamily:'LufthansaHeadWeb-Thin',
													lineHeight:'36px',
													letterSpacing:'0.6px',
													transform:'scaleX(0.845) scaleY(0.93)',
												}}
											>
												02/22
											</span>
										</Stack>
									</Flex>
									<Stack pl="124.5px" pt="41px" w="100%">
										<Flex w="141px" h="141px" borderRadius='md' bg='white' justify={'center'} align={'center'} >
											<Box id='mountNode' />
										</Flex>
									</Stack>
								</VStack>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}

export default MemberCard2;