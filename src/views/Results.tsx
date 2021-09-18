import { Marker } from 'components';
import { Header, SportlifeLink, MarathoneResults } from 'views/common';
import results2018 from 'data/results2018';
import results2019 from 'data/results2019';

const Results = () => (
    <main>
        <Header title="Результаты" bgImage="results-intro.jpg" />
        <MarathoneResults
            title={
                <>
                    Полумарафон Сестрорецк <Marker>2019</Marker>
                </>
            }
            data={results2019}
            note={
                <>
                    Михаил выиграл годовой абонемент <SportlifeLink />
                </>
            }
        />
        <MarathoneResults
            title={
                <>
                    Полумарафон Сестрорецк <Marker>2018</Marker>
                </>
            }
            data={results2018}
            note={
                <>
                    Все призёры выиграли годовой абонемент <SportlifeLink />
                </>
            }
        />
    </main>
);

export default Results;
