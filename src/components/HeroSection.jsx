import Breadcrumbs from "./Breadcrumbs"
import Hero from "./Hero"

const HeroSection = () => {
  return (
    <div className="container-fluid">
        <Breadcrumbs breadcrumbsValue="Home"/>
        <Hero />
    </div>
  )
}

export default HeroSection