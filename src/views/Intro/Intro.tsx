import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Section } from 'views/common/layout';

const StyledSection = styled(Section)({
    background: 'url(./images/intro.jpeg) bottom no-repeat',
    backgroundSize: 'cover',
});

const Intro = () => (
    <StyledSection>
        <Typography variant="h3">СНОВА ЗОВЁТ НА СТАРТ!</Typography>
    </StyledSection>
);

export default Intro;
