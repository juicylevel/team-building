import { styled } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';

const ContentSectionTitle = styled(SectionTitle)(({ theme }) => ({
    textAlign: 'center',
    width: '90%',
    [theme.breakpoints.only('xs')]: {
        fontSize: '2.25rem',
    },
}));

export default ContentSectionTitle;
