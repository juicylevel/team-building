import { Marker } from 'components';
import { Header } from 'views/common';

const Intro = () => (
    <Header
        title={
            <>
                Снова зовет на <Marker>старт!</Marker>
            </>
        }
        bgImage="intro.jpeg"
    />
);

export default Intro;
