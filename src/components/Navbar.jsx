import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MemberCard from './MemberCard';
import alaskaAirlinesPage_1_rawHtml from './alaskaAirlinesPage_1_rawHtml';
import alaskaAirlinesPage_2_rawHtml from './alaskaAirlinesPage_2_rawHtml';
import { useEffect } from 'react';

function Navbar() {
  // const [newMemberName, setNewMemberName] = useState('')
  // const [newMemberNumber, setNewMemberNumber] = useState('')  

  useEffect(() => {
    const insertRawHTML =  document.querySelector('.insertRawHTML')
    const insertRawHTML2 =  document.querySelector('.insertRawHTML2')
    insertRawHTML.innerHTML = alaskaAirlinesPage_1_rawHtml
    insertRawHTML2.innerHTML = alaskaAirlinesPage_2_rawHtml
    // if (newMemberName !== '' || newMemberNumber !== '') {
    //   alaskaAirlinesPage_1_rawHtml.replace('James Shao MVP', newMemberName + 'MVP' )
    //   alaskaAirlinesPage_1_rawHtml.replace('259190315', newMemberNumber )
    //   insertRawHTML.innerHTML = alaskaAirlinesPage_1_rawHtml
    // }
  },[])


  // function updateMemberInfo(memberName,memberNumber) {
  //   console.log(memberName,memberNumber)
  //   setNewMemberName(memberName)
  //   setNewMemberNumber(memberNumber)
  // }

	return (
		<Tabs>
			<TabList>
				<Tab>Generator Card</Tab>
        <Tab>Alaska Web Site Page 1</Tab>
        <Tab>Alaska Web Site Page 2</Tab>
			</TabList>

			<TabPanels>
				<TabPanel padding='0'>
					<MemberCard />
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
