import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { VFlexBox } from 'components/flexBox';
import { Section } from 'views/common/layout';
import Logo from './Logo';

const StyledSection = styled(Section)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'url(./images/intro.jpeg) bottom no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.up('xs')]: {
        backgroundPositionX: '67%',
    },
    [theme.breakpoints.up('sm')]: {
        backgroundPositionX: '70%',
    },
}));

const Header = styled('header')(({ theme }) => ({
    display: 'flex',
    backgroundColor: 'rgb(255 255 255 / 70%)',
    boxShadow: '0 5px 10px rgb(0 0 0 / 10%)',
    [theme.breakpoints.only('xs')]: {
        justifyContent: 'center',
        backgroundColor: 'rgb(255 255 255 / 85%)',
    },
    [theme.breakpoints.up('xs')]: {
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    [theme.breakpoints.up('sm')]: {
        paddingLeft: '80px',
        paddingTop: '50px',
        paddingBottom: '50px',
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: '100px',
    },
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '160px',
    },
}));

const ContentWrapper = styled(VFlexBox)(({ theme }) => ({
    [theme.breakpoints.only('xs')]: {
        width: '280px',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    [theme.breakpoints.only('xs')]: {
        fontSize: '1.45rem',
    },
    [theme.breakpoints.up('xs')]: {
        marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(5),
    },
}));

const Intro = () => (
    <StyledSection>
        <Header>
            <ContentWrapper>
                <Logo />
                <Title variant="h4">Снова зовёт на старт!</Title>
            </ContentWrapper>
        </Header>
    </StyledSection>
);

export default Intro;
