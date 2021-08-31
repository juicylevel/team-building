import { styled } from '@material-ui/core/styles';
import Section from './Section';

const ContentSection = styled(Section)(({ theme }) => ({
    '@media (max-height: 461px)': {
        padding: '50px',
    },
}));

export default ContentSection;
