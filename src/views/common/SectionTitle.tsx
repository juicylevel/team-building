import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const SectionTitle = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    fontWeight: 400,
    wordBreak: 'break-word',
}));

export default SectionTitle;
