import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { CenterFlexBox } from 'components/flexBox';
import { ContentSectionTitle } from 'views/common';
import { Section } from 'views/common/layout';

const StyledSection = styled(Section)(({ theme }) => ({
    background: 'url(./images/running.jpg) center bottom no-repeat',
    backgroundSize: 'cover',
    backgroundPositionX: '46%',
}));

const SeeYou = () => (
    <StyledSection>
        <CenterFlexBox width="100%" height="100%">
            <ContentSectionTitle variant="h2">
                <Box color="#fff">До встречи в Сестрорецке!</Box>
            </ContentSectionTitle>
        </CenterFlexBox>
    </StyledSection>
);

export default SeeYou;
