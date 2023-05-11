import { React } from 'react';
import { Box, Flex, Heading, Stack, Text, useColorModeValue, VStack, Button } from '@chakra-ui/react';
import Form from './Form';
import { useRef } from 'react';

function onSubmit(memberName, memberNumber, memberSince, validUntil, mvp) {
  document.getElementById('name').innerHTML = memberName;
  document.getElementById('memberNumber').innerHTML = memberNumber;
  document.getElementById('memberSince').innerHTML = memberSince;
  const newVaild = validUntil.split('-');
  document.getElementById('validUntil').innerHTML =
    newVaild[1] + '/' + newVaild[2] + '/' + newVaild[0];
  const mvpBlock = document.getElementById('mvpBlock');
  const newMvp = document.getElementById('mvp');
  const newBg = document.getElementById('bg');
  if (mvp === '') {
    newBg.style.backgroundImage = "url('/images/background_card2_blank.png')";
    mvpBlock.style.paddingTop = '29.4px';
    newMvp.style.color = '#887c48';
    const newLevelMvp = `MVP <br/>
                    GOLD ${mvp}`;
    document.getElementById('mvp').innerHTML = newLevelMvp;
  } else {
    newBg.style.backgroundImage = "url('/images/background_card_blank.png')";
    mvpBlock.style.paddingTop = '80px';
    newMvp.style.color = '#746745';
    const newLevelMvp = `MVP <br/>GOLD ${mvp}`;
    document.getElementById('mvp').innerHTML = newLevelMvp;
  }
}

function MemberCard({ updateMemberInfo }) {
	const memberName = useRef('')
	const memberNumber = useRef('')

	const getMemberInfo = (event) => {
		event.preventDefault();
		memberName.current = document.getElementById('name').innerHTML;
		memberNumber.current = document.getElementById('memberNumber').innerHTML;
		updateMemberInfo(memberName, memberNumber)
	}

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
							Alaska Card Generator
						</Heading>
						<Stack
							mrt='10px'
							spacing={{ base: 5, md: 5, lg: 5 }}
							direction={{ base: 'column', md: 'row' }}
						>
							<Form onSubmit={onSubmit}></Form>
							<Box id='capture'>
								<VStack
									id='bg'
									w='390px'
									h='674px'
									bgImage="url('/images/background_card_blank.png')"
									bgSize='cover'
									bgPosition='center'
									bgRepeat='no-repeat'
									align='start'
									justify='start'
									direction={{ base: 'row', md: 'column' }}
								>
									<Stack paddingLeft='37.5px' mt='306.5px' mb='5px' h='auto' w='360px'>
										<Text
											id='name'
											className='memberName'
											textAlign='start'
											color='#00426F'
											fontSize='18.8px'
											fontFamily='AS Circular'
											fontWeight={500}
											lineHeight='18px'
											// letterSpacing="-0.6px"
											reft={memberName}
										>
											Archan Rajnikant Patel
										</Text>
									</Stack>
									<Stack paddingLeft='37.6px' w='380px'>
										<Text
											id='memberNumber'
											className='memberNumber'
											color='#00426F'
											h='100%'
											fontSize='37.5px'
											fontFamily='AS Circular'
											fontWeight={500}
											lineHeight='36px'
											ref={memberNumber}
										>
											2542770970
										</Text>
									</Stack>
									<Stack w='380px' paddingTop='8.2px' paddingLeft='151px'>
										<Text
											id='memberSince'
											className='memberSince'
											color='#00426F'
											h='100%'
											fontSize='17px'
											fontFamily='AS Circular'
											// letterSpacing=""
											lineHeight='18px'
										>
											2016
										</Text>
									</Stack>
									<Stack w='380px' paddingTop='2.8px' paddingLeft='116.5px'>
										<Text
											id='validUntil'
											className='validUntil'
											color='#00426F'
											h='100%'
											fontSize='17px'
											fontFamily='AS Circular'
											// fontWeight={300}
											// letterSpacing="0.05px"
											lineHeight='18px'
										>
											12/31/2023
										</Text>
									</Stack>
									<Stack id='mvpBlock' w='380px' h='auto' paddingTop='80px' paddingLeft='37.5px'>
										<Text
											id='mvp'
											className='mvp'
											color='#746745'
											fontSize='38px'
											fontWeight={600}
											transform='scaleX(1)'
											lineHeight='36px'
										>
											MVP <br />
											GOLD 100K
										</Text>
									</Stack>
								</VStack>
							</Box>
							<Button
                  mt="5px"
									colorScheme='blue'
									bg='blue.400'
									color='white'
									_hover={{
										bg: 'blue.500',
									}}
                  onClick={getMemberInfo}
                >
                  點我換置網頁會員名稱及會員號碼
                </Button>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}




export default MemberCard;