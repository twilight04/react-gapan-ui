import Banner from "./Banner"
import Divider from "./Divider"

const Main = ({title}) => {
  return (
    <main>
        <div className="container">
            <Banner title={title}/>
            <Divider />
        </div>
    </main>
  )
}

export default Main