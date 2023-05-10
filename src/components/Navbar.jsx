import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import MemberCard from './MemberCard'

function Navbar() {
  return (
    <Tabs>
      <TabList>
        <Tab>Generator Card</Tab>
        <Tab>Web Site</Tab>
      </TabList>
      <TabPanels>
        <TabPanel padding="0">
          <MemberCard />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Navbar