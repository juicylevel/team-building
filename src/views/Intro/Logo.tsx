import { styled } from '@material-ui/core/styles';
import { createImageSizeCalc } from 'helpers';
import logo from 'images/logo.svg';

const getImageSize = createImageSizeCalc({
    width: 1854.11,
    height: 725.13,
});

const Logo = styled('div')(({ theme }) => ({
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: getImageSize(240),
    ...getImageSize(300),
}));

export default Logo;
