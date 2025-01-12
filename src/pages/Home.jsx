import About from '../components/About';
import { Box, Flex } from '@chakra-ui/react';
import Card from '../components/Card';
import Trending from '../components/Trending';
import Tokenomics from '../components/Tokenomics';
import Team from '../components/Team';
import Chart from '../components/Chart'
import AllChart from '../components/AllChart'
import Sentiment from '../components/Sentiment'
import Insight from '../components/Insight';

export default function Home() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} width="100%">
      <Box
        flex={{ base: 1, md: 3 }}
        p={4}
        width="100%" 
        mt={{ base: '20px', md: '0' }} 
      >
        <Chart/>

        <Sentiment/>
        <About />
        <Tokenomics/>
        <Team/>
        <Insight/>
        <AllChart/>
      </Box>

      <Box
        flex={{ base: 1, md: 1 }}
        p={'0 40px'}
        width="100%"
        mt={{ base: '20px', md: '10' }} 
      >
        <Card />
        <Trending />
      </Box>
    </Flex>
  );
}
