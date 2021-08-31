import { Marker } from 'components';
import { CenterFlexBox } from 'components/flexBox';
import { ContentSectionTitle } from 'views/common';
import { ContentSection } from 'views/common/layout';

const Greeting = () => (
    <ContentSection color="#fffbf0">
        <CenterFlexBox width="100%" height="100%">
            <ContentSectionTitle variant="h2">
                Участвуй в главном событии весны - <Marker>сестрорецкий</Marker>{' '}
                полумарафон!
            </ContentSectionTitle>
        </CenterFlexBox>
    </ContentSection>
);

export default Greeting;
