import Audiogear from "../Audiogear"
import Footer from "../Footer"
import {Earphones,EarphonesInformation} from "./Earphones"
import IntroPage from "./IntroPage"
import Products from "../Products"
import SpeakerZX7 from "./SpeakerZX7"
import SpeakerZX9 from "./SpeakerZX9"
const Home = () => {
    return (
        <section>
            <IntroPage />
            <Products />
            <SpeakerZX9 />
            <SpeakerZX7 />
            <Earphones />
            <EarphonesInformation />
            <Audiogear />
            <Footer />
        </section>
    )
}
export default Home