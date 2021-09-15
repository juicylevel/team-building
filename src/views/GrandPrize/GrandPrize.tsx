import { Marker } from 'components';
import { ContentSectionTitle } from 'views/common';
import { CenterFlexBox, VFlexBox } from 'components/flexBox';
import { Section } from 'views/common/layout';
import { styled } from '@material-ui/core/styles';
import { createImageSizeCalc } from 'helpers';

const getPrizeImageSize = createImageSizeCalc({
    width: 561,
    height: 440,
});

const PrizeImage = styled('div')(({ theme }) => ({
    backgroundImage: `url(./images/hand-card.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignSelf: 'flex-end',
    ...getPrizeImageSize(900),
    [theme.breakpoints.down('md')]: getPrizeImageSize(750),
    [theme.breakpoints.down('sm')]: getPrizeImageSize(500),
    [theme.breakpoints.down('xs')]: getPrizeImageSize(300),
}));

const GrandPrize = () => (
    <Section>
        <CenterFlexBox height="100%">
            <VFlexBox spacing={8} alignItems="center">
                <ContentSectionTitle variant="h2">
                    Победитель получает годовой абонемент{' '}
                    <Marker>SPORTLIFE!</Marker>
                </ContentSectionTitle>
                <PrizeImage />
            </VFlexBox>
        </CenterFlexBox>
    </Section>
);

export default GrandPrize;
