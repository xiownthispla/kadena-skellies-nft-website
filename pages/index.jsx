import Hero from "../components/Hero";
import Layout from "../Layout/Layout";
import "@fontsource/roboto-slab/900.css";
import "@fontsource/roboto-slab/600.css";
import "@fontsource/roboto-slab/500.css";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/fira-sans/700.css";
import "@fontsource/fira-sans/600.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/fira-sans/400.css";
import Utilities from "../components/Utilities";
import RoadMap from "../components/RoadMap";
import About from "../components/About";
import Faq from "../components/Faq";
import Join from "../components/Join";
import Footer from "../components/Footer";
import Steps from "../components/Steps";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Steps />
            <Utilities />
            <RoadMap />
            <Faq />
			<About />
            <Join />
            <Footer />
        </Layout>
    );
}
