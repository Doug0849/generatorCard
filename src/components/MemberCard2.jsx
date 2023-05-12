import { React } from 'react';
import { Box, Flex, Heading, Stack, Text, useColorModeValue, VStack, HStack } from '@chakra-ui/react';
import Form2 from './Form2';
import ReactDOM from 'react-dom/client';
import {QRCodeCanvas} from 'qrcode.react';

function onSubmit(language, firstName, lastName, number1, number2, number3, number4, validUntil) {
  document.getElementById('firstName').innerText = firstName;
	document.getElementById('lastName').innerText = lastName;
	document.getElementById('memberNumber1').innerText = number1;
	document.getElementById('memberNumber2').innerText = number2;
	document.getElementById('memberNumber3').innerText = number3;
	document.getElementById('memberNumber4').innerText = number4;
	document.getElementById('validThru').innerText = validUntil;
  const hansaBg = document.getElementById('hansaBg');
  if (language === '1') {
    hansaBg.style.backgroundImage = "url('/images/hansa_english_card.png')";
  } else {
    hansaBg.style.backgroundImage = "url('./images/hansa_german_card.png')";
  }

	// QRCord generation
	let qrcodeValue = `FFPC001LH${number1}${number2}${number3}${number4}`
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
									bgImage="url('/images/hansa_english_card.png')"
									bgSize='cover'
									bgPosition='center'
									bgRepeat='no-repeat'
									align='start'
									justify='start'
									direction={{ base: 'row', md: 'column' }}
								>
									<Stack paddingLeft='55.8px' mt='112.2px' h='auto' w='390px'>
										<Text
											id='firstName'
											className='memberName'
											textAlign='start'
											mb='-8px'
											color='#fbfbfb'
											pl='0.1px'
											fontSize='24px'
											fontFamily='Roboto'
											fontWeight="500"
											lineHeight='30.3px'
											letterSpacing="0.55px"
											transform='scaleX(1)'
										>
											MATTHIAS
										</Text>
										<Text
											id='lastName'
											className='memberName'
											textAlign='start'
											color='#fbfbfb'
											pl='0.1px'
											fontSize='24px'
											fontFamily='Roboto'
											fontWeight="500"
											lineHeight='30.3px'
											letterSpacing="0.55px"
											transform='scaleX(1)'>
											CABA
										</Text>
									</Stack>
									<Flex pl='52.4px' pt="46px" w='390px'
									justify="space-between">
										<HStack>
										<span
											id='memberNumber1'
											className='memberNumber'
											style={{
												wordSpacing: '1.3px',
												color:'#fbfbfb',
												h:'100%',
												fontSize:'18px',
												fontFamily:'LufthansaHeadWeb-Thin',
												lineHeight:'36px',
												letterSpacing:'0.5px',
												transform:'scaleX(0.845) scaleY(0.93)',
											}}
										>
											3330 
										</span>
										<span
											id='memberNumber2'
											className='memberNumber'
											style={{
												marginLeft: '-2.1px',
												wordSpacing: '1.3px',
												color:'#fbfbfb',
												h:'100%',
												fontSize:'18px',
												fontFamily:'LufthansaHeadWeb-Thin',
												lineHeight:'36px',
												letterSpacing:'0.85px',
												transform:'scaleX(0.845) scaleY(0.93)',
											}}
										>
											3187
										</span>
										<span
											id='memberNumber3'
											className='memberNumber'
											style={{
												marginLeft: '-2.1px',
												wordSpacing: '1.3px',
												color:'#fbfbfb',
												h:'100%',
												fontSize:'18px',
												fontFamily:'LufthansaHeadWeb-Thin',
												lineHeight:'36px',
												letterSpacing:'0.6px',
												transform:'scaleX(0.845) scaleY(0.93)',
											}}
										>
											7843
										</span>
										<span
											id='memberNumber4'
											className='memberNumber'
											style={{
												marginLeft: '-2.1px',
												wordSpacing: '1.3px',
												color:'#fbfbfb',
												h:'100%',
												fontSize:'18px',
												fontFamily:'LufthansaHeadWeb-Thin',
												lineHeight:'36px',
												letterSpacing:'1px',
												transform:'scaleX(0.845) scaleY(0.93)',
											}}
										>
											962
										</span>
										</HStack>
										<Stack justify="end">
											<span
												id='validThru'
												className='validThru'
												style={{
													marginRight: '50.3px',
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