import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MemberCard from './MemberCard';
import alaskaAirlinesPage_2_rawHtml from './alaskaAirlinesPage_2_rawHtml';
import alaskaAirlinesPage_1_rawHtml from './alaskaAirlinesPage_1_rawHtml';
import { useEffect, useState, useRef } from 'react';

let webPage1 = alaskaAirlinesPage_1_rawHtml
let webPage2 = alaskaAirlinesPage_2_rawHtml


function Navbar() {

  useEffect(() => {
    const insertRawHTML =  document.querySelector('.insertRawHTML')
    const insertRawHTML2 =  document.querySelector('.insertRawHTML2')
    insertRawHTML.innerHTML = webPage1
    insertRawHTML2.innerHTML = webPage2
  },[])
  
  function updateMemberInfo(memberName,memberNumber) {
    const insertRawHTML =  document.querySelector('.insertRawHTML')
    const insertRawHTML2 =  document.querySelector('.insertRawHTML2')
    const newMemberName = memberName.current
    const newMemberNumber = memberNumber.current
    webPage1 = webPage1.replace('James Shao MVP', newMemberName + ' MVP' )
    webPage1 = webPage1.replace('259190315/i', newMemberNumber )
    webPage2 = webPage2.replace('James Shao MVP', newMemberName + ' MVP' )
    webPage2 = webPage2.replace('259190315', newMemberNumber )
    insertRawHTML.innerHTML = webPage1
    insertRawHTML2.innerHTML = webPage2
  }

	return (
		<Tabs>
			<TabList>
				<Tab>Generator Card</Tab>
        <Tab>Alaska Web Site Page 1</Tab>
        <Tab>Alaska Web Site Page 2</Tab>
			</TabList>

			<TabPanels>
				<TabPanel padding='0'>
					<MemberCard updateMemberInfo={updateMemberInfo} />
				</TabPanel>
				<TabPanel className="insertRawHTML">
				</TabPanel>
				<TabPanel className="insertRawHTML2">
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default Navbar;
