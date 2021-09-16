import { styled } from '@material-ui/core/styles';
import { brandColor } from 'theme/variables';

const Marker = styled('span')(({ theme }) => ({
    color: brandColor,
}));

export default Marker;
