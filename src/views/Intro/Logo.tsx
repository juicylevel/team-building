import { styled } from '@material-ui/core/styles';
import logo from 'images/logo.svg';

const originWidth = 1854.11;
const originHeight = 725.13;

type Size = {
    width: string;
    height: string;
};

const calcSize = (requestWidth: number): Size => {
    return {
        width: requestWidth + 'px',
        height: (requestWidth * originHeight) / originWidth + 'px',
    };
};

const Logo = styled('div')(({ theme }) => ({
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: calcSize(240),
    // [theme.breakpoints.up('md')]: calcSize(300),
    ...calcSize(300),
}));

export default Logo;
