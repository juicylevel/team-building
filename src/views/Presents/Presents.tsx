import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Marker } from 'components';
import { CenterFlexBox, VFlexBox } from 'components/flexBox';
import { Section } from 'views/common/layout';

const StyledSection = styled(Section)(({ theme }) => ({
    background: 'url(./images/medal.webp) center no-repeat',
    backgroundSize: '40%',
}));

const Header = styled(VFlexBox)({
    backgroundColor: 'rgb(0 0 0 / 70%)',
    color: '#fff',
    textTransform: 'uppercase',
    padding: '60px',
    borderRadius: '10px',
});

const Presents = () => (
    <StyledSection color="#fffbf0">
        <CenterFlexBox height="100%">
            <Header spacing={5} alignItems="center">
                <Typography variant="h2">
                    <Box fontWeight="400">
                        Победителям - <Marker>медали</Marker>
                    </Box>
                </Typography>
                <Typography variant="h3">Участникам - футболки</Typography>
                <Typography variant="h4">Всем отличное настроение!</Typography>
            </Header>
        </CenterFlexBox>
    </StyledSection>
);

export default Presents;
