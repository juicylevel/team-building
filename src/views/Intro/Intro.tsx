import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Marker } from 'components';
import { SectionTitle } from 'views/common';
import { Section } from 'views/common/layout';
import Logo from './Logo';

const StyledSection = styled(Section)(({ theme }) => ({
    background: 'url(./images/intro.jpeg) bottom no-repeat',
    backgroundSize: 'cover',
    '@media (min-height: 590px)': {
        paddingTop: '15vh',
    },
    [theme.breakpoints.down('xs')]: {
        backgroundPositionX: '67%',
        paddingTop: 0,
    },
    [theme.breakpoints.down('sm')]: {
        backgroundPositionX: '70%',
    },
}));

const Header = styled(Grid)(({ theme }) => ({
    boxShadow: '0 5px 10px rgb(0 0 0 / 10%)',
}));

const Title = styled(SectionTitle)(({ theme }) => ({
    color: '#fff',
    [theme.breakpoints.only('xs')]: {
        fontSize: '2.6rem',
        textAlign: 'center',
    },
}));

const Cell = styled(Grid)(({ theme }) => ({
    display: 'flex',
    padding: '50px',
    [theme.breakpoints.down('sm')]: {
        height: '207px',
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: '15px',
        paddingRight: '15px',
    },
}));

const LightCell = styled(Cell)(({ theme }) => ({
    backgroundColor: 'rgb(255 255 255 / 70%)',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.only('sm')]: {
        justifyContent: 'flex-start',
    },
    [theme.breakpoints.only('xs')]: {
        backgroundColor: 'rgb(255 255 255 / 90%)',
    },
}));

const DarkCell = styled(Cell)(({ theme }) => ({
    backgroundColor: 'rgb(0 0 0 / 65%)',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
        justifyContent: 'center',
    },
}));

const Intro = () => (
    <StyledSection>
        <Header container>
            <LightCell item xl={2} lg={3} md={4} sm={12} xs={12}>
                <Logo />
            </LightCell>
            <DarkCell item xl={10} lg={9} md={8} sm={12} xs={12}>
                <Title variant="h2">
                    Снова зовет на <Marker>старт!</Marker>
                </Title>
            </DarkCell>
        </Header>
    </StyledSection>
);

export default Intro;
