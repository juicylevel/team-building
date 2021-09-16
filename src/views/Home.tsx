import Intro from 'views/Intro';
import Greeting from 'views/Greeting';
import GrandPrize from 'views/GrandPrize';
import Presents from 'views/Presents';
import EventDate from 'views/EventDate';
import Participate from 'views/Participate';
import EventCountdown from 'views/EventCountdown';
import Prevresults from 'views/Prevresults';
import SeeYou from 'views/SeeYou';
import Footer from 'views/Footer';

const Home = () => (
    <main>
        <Intro />
        <Greeting />
        <GrandPrize />
        <Presents />
        <EventDate />
        <Participate />
        <EventCountdown />
        <Prevresults />
        <SeeYou />
        <Footer />
    </main>
);

export default Home;
