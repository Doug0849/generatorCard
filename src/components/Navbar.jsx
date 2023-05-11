import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import MemberCard from './MemberCard';
import alaskaAirlinesPage_1_rawHtml from './alaskaAirlinesPage_1_rawHtml';
import { useEffect } from 'react';

function Navbar() {
  // const [newMemberName, setNewMemberName] = useState('')
  // const [newMemberNumber, setNewMemberNumber] = useState('')  

  useEffect(() => {
    const insertRawHTML =  document.querySelector('.insertRawHTML')
    insertRawHTML.innerHTML = alaskaAirlinesPage_1_rawHtml
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
        <Tab>Alaska Web Site</Tab>
			</TabList>

			<TabPanels>
				<TabPanel padding='0'>
					<MemberCard />
				</TabPanel>
				<TabPanel className="insertRawHTML">
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default Navbar;
