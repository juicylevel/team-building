import { styled } from '@material-ui/core/styles';
import { VFlexBox } from 'components/flexBox';
import { ContentSectionTitle } from 'views/common';
import { Section } from 'views/common/layout';

const StyledSection = styled(Section)(({ theme }) => ({
    background: 'url(./images/medal.jpeg) center bottom no-repeat',
    backgroundSize: 'cover',
    backgroundPositionX: '25%',
    minHeight: '1000px',
}));

const Presents = () => (
    <StyledSection color="#fffbf0">
        <VFlexBox
            height="100%"
            alignItems="center"
            justifyContent="space-between"
        >
            <ContentSectionTitle variant="h2">
                Победителям - медали!
            </ContentSectionTitle>
            <VFlexBox spacing={2} alignItems="center" width="100%">
                <ContentSectionTitle variant="h3">
                    Участникам - футболки
                </ContentSectionTitle>
                <ContentSectionTitle variant="h5">
                    Всем отличное настроение
                </ContentSectionTitle>
            </VFlexBox>
        </VFlexBox>
    </StyledSection>
);

export default Presents;
