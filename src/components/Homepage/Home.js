import Audiogear from "../Utiliies/Audiogear"
import Footer from "../Utiliies/Footer"
import {Earphones,EarphonesInformation} from "./Earphones"
import Headphones from "./Headphones"
import Products from "../Utiliies/Products"
import SpeakerZX7 from "./SpeakerZX7"
import SpeakerZX9 from "./SpeakerZX9"
const Home = () => {
    return (
        <section>
            <Headphones />
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