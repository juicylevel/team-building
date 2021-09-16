import { RouterLink } from 'components';
import { CenterFlexBox } from 'components/flexBox';
import { ContentSectionTitle } from 'views/common';
import { ContentSection } from 'views/common/layout';

const Prevresults = () => (
    <ContentSection color="#fffbf0">
        <CenterFlexBox width="100%" height="100%">
            <ContentSectionTitle variant="h2">
                Предыдущий полумарафон
                <br />
                <RouterLink to="/results">Результаты</RouterLink>
            </ContentSectionTitle>
        </CenterFlexBox>
    </ContentSection>
);

export default Prevresults;
