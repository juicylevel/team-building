import { Section } from 'views/common/layout';
import Intro from 'views/Intro';
import Greeting from 'views/Greeting';

const Main = () => (
    <main>
        <Intro />
        <Greeting />
        <Section color="#7588dd" />
    </main>
);

export default Main;
