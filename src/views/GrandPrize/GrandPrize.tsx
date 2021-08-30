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

const GrandPrize = () => (
    <Section>
        <CenterFlexBox height="100%">
            <Title variant="h3">
                Победитель получает годовой абонемент в{' '}
                <Marker>SPORTLIFE</Marker>
            </Title>
        </CenterFlexBox>
    </Section>
);

export default GrandPrize;