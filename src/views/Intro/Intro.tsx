import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { VFlexBox } from 'components/flexBox';
import { Section } from 'views/common/layout';
import Logo from './Logo';

const StyledSection = styled(Section)({
    paddingTop: '90px',
    background: 'url(./images/intro.jpeg) bottom no-repeat',
    backgroundSize: 'cover',
});

const Intro = () => (
    <StyledSection>
        <VFlexBox spacing={3}>
            <Logo />
            <Typography variant="h3">СНОВА ЗОВЁТ НА СТАРТ!</Typography>
        </VFlexBox>
    </StyledSection>
);

export default Intro;
