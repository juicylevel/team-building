import { Marker } from 'components';
import { CenterFlexBox } from 'components/flexBox';
import { ContentSectionTitle } from 'views/common';
import { ContentSection } from 'views/common/layout';

const EventDate = () => (
    <ContentSection>
        <CenterFlexBox width="100%" height="100%">
            <ContentSectionTitle variant="h2">
                Бежим <Marker>в мае</Marker> 2020 года,
                <br />
                готовьтесь!
            </ContentSectionTitle>
        </CenterFlexBox>
    </ContentSection>
);

export default EventDate;
