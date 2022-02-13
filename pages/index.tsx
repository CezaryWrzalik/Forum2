import type { NextPage } from 'next'
import Aside from '../components/main/aside/aside'
import NavBar from '../components/main/navbar/navbar'
import { IndexContainer, IndexGridContainer } from '../styles/indexStyled'


const Home: NextPage = () => {
  return (
    <IndexContainer >
      <NavBar />
      <IndexGridContainer >
          <div>...</div>
          <Aside />
      </IndexGridContainer>
    </IndexContainer>
  )
}

export default Home
