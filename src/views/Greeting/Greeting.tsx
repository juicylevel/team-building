import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Marker } from 'components';
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

const Greeting = () => (
    <Section color="#fffbf0">
        <CenterFlexBox width="100%" height="100%">
            <Title variant="h3">
                Участвуй в главном событии весны - <Marker>сестрорецкий</Marker>{' '}
                полумарафон!
            </Title>
        </CenterFlexBox>
    </Section>
);

export default Greeting;
