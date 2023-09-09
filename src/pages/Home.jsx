import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";
import MailList from "../components/MailList";
import Footer from "../components/Footer";



const Home = () =>{
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1>Browse by property type</h1>
                <PropertyList />
                <h1>Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer/>
                
            </div>
        </>
    );
};


export default Home;