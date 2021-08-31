import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { CenterFlexBox } from 'components/flexBox';
import { Section } from 'views/common/layout';

const Title = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 1.6,
    width: '90%',
    wordBreak: 'break-word',
    [theme.breakpoints.only('xs')]: {
        fontSize: '2.1rem',
    },
}));

const Prevresults = () => (
    <Section color="#fffbf0">
        <CenterFlexBox width="100%" height="100%">
            <Title variant="h3">Предыдущий полумарафон 2019 года</Title>
        </CenterFlexBox>
    </Section>
);

export default Prevresults;
