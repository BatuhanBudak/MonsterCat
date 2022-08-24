import type { NextPage } from 'next'
import BackgroundPage from '../components/BackgroundPage'
import Header from '../components/Header'
import MainContent from '../components/MainContent'


const Home: NextPage = () => {
  return (
    <div >
      <BackgroundPage />
      <Header />
      <MainContent />

    </div>
  )
}

export default Home
