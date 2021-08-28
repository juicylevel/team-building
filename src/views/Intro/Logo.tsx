import { styled } from '@material-ui/core/styles';
import logo from 'images/logo.svg';

const Box = styled('div')({
    width: '467px',
    height: '250px',
    padding: '30px 70px',
    backgroundColor: 'rgb(255 255 255 / 70%)',
    boxShadow: '0 5px 10px rgb(0 0 0 / 10%)',
});

const Pic = styled('div')({
    width: '100%',
    height: '100%',
    background: `url(${logo}) 50% no-repeat`,
});

const Logo = () => (
    <Box>
        <Pic />
    </Box>
);

export default Logo;
