import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Form from './Form'
import React from 'react';

function onSubmit(memberName, memberNumber, memberSince, validUntil, mvp) {
  document.getElementById('name').innerHTML = memberName
  document.getElementById('memberNumber').innerHTML = memberNumber
  document.getElementById('memberSince').innerHTML = memberSince
  const newVaild = validUntil.split('-')
  document.getElementById('validUntil').innerHTML = newVaild[1] + '/' + newVaild[2] + '/' + newVaild[0]
  const mvpBlock = document.getElementById('mvpBlock')
  const newMvp = document.getElementById('mvp')
  const newBg = document.getElementById('bg')
  if (mvp === '') {
    newBg.style.backgroundImage = "url('/images/background_card2_blank.png')"
    mvpBlock.style.paddingTop = '29.4px'
    newMvp.style.color = '#887c48'
    const newLevelMvp = `MVP <br/>
                    GOLD ${mvp}`
    document.getElementById('mvp').innerHTML = newLevelMvp
  } else {
    newBg.style.backgroundImage = "url('/images/background_card_blank.png')"
    mvpBlock.style.paddingTop = '80px'
    newMvp.style.color = '#746745'
    const newLevelMvp = `MVP <br/>
                    GOLD ${mvp}`
    document.getElementById('mvp').innerHTML = newLevelMvp
  }
}

function MemberCard() {

  return (
    <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        align="center"
        justify="center"
        css={{
          backgroundAttachment: 'fixed',
        }}
        id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                }}>
                Alaska Card Generator
              </Heading>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
                <Form onSubmit={onSubmit}></Form>
                <Box id="capture">
                  <VStack
                    id="bg"
                    w="390px"
                    h="674px"
                    bgImage="url('/images/background_card_blank.png')"
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    align="start"
                    justify="start"
                    direction={{ base: 'row', md: 'column' }}>
                      <Stack
                        paddingLeft="38.5px"
                        mt="306px"
                        mb="5.6px"
                        h="auto"
                        w="360px">
                        <Text
                          id='name'
                          className='memberName'
                          textAlign="start"
                          color='#00426F'
                          fontSize='18.7px'
                          fontFamily="AS Circular"
                          fontWeight={500}
                          lineHeight="18px"
                          // letterSpacing="-0.6px"
                          >
                          Archan Rajnikant Patel
                        </Text>
                      </Stack>
                      <Stack
                        paddingLeft="38px"
                        w="380px">
                        <Text
                          id='memberNumber'
                          className='memberNumber'
                          color='#00426F'
                          h="100%"
                          fontSize="36px"
                          fontFamily="AS Circular"
                          fontWeight={500}
                          letterSpacing="1px"
                          lineHeight="36px"
                          >
                          2542770970
                        </Text>
                      </Stack>
                      <Stack
                        w="380px"
                        paddingTop="8.2px"
                        paddingLeft="151px">
                        <Text
                          id="memberSince"
                          className='memberSince'
                          color='#00426F'
                          h="100%"
                          fontSize="17px"
                          fontFamily="AS Circular"
                          // letterSpacing=""
                          lineHeight="18px"
                          >
                          2016
                        </Text>
                      </Stack>
                      <Stack
                        w="380px"
                        paddingTop="3px"
                        paddingLeft="116px">
                        <Text
                          id='validUntil'
                          className='validUntil'
                          color='#00426F'
                          h="100%"
                          fontSize="17px"
                          fontFamily="AS Circular"
                          fontWeight={300}
                          letterSpacing="-0.2px"
                          lineHeight="18px"
                          >
                          12/31/2023
                        </Text>
                      </Stack>
                      <Stack
                        id="mvpBlock"
                        w="380px"
                        h="auto"
                        paddingTop="80px"
                        paddingLeft="37.5px">
                        <Text
                          id='mvp'
                          className='mvp'
                          color='#746745'
                          fontSize="38px"
                          fontWeight={600}
                          transform="scaleX(1)"
                          lineHeight="36px"
                          >
                          MVP <br/>
                          GOLD 100K
                        </Text>
                      </Stack>
                  </VStack>
                </Box>
                {/* <Button
                  mt="5px"
                  onClick={downloadImage}
                >
                  點我擷取區塊
                </Button> */}
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
  )
}

export default MemberCard;