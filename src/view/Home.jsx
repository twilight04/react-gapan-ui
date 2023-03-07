import HeroSection from "../components/HeroSection"
import Mashead from "../components/Mashead"
import Main from "../components/Main"

const Home = () => {
  return (
    <>
      <header>
        <Mashead />
        <hr />
        <HeroSection />
        <hr />
      </header>
      <Main title="NEWS AND UPDATES" />
    </>
  )
}

export default Home