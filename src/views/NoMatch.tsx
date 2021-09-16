import { Box, Link, Typography } from '@material-ui/core';
import { CenterFlexBox, VFlexBox } from 'components/flexBox';
import { Link as RouterLink } from 'react-router-dom';

const NoMatch = () => (
    <CenterFlexBox height="100%">
        <VFlexBox alignItems="center" spacing={3}>
            <Typography variant="h1">
                <Box color="primary.main" fontWeight="600">
                    Ой!
                </Box>
            </Typography>
            <Typography variant="overline" align="center">
                Нам не удалось найти такую страницу...
                <br />
            </Typography>
            <Link component={RouterLink} to="/">
                на главную
            </Link>
        </VFlexBox>
    </CenterFlexBox>
);

export default NoMatch;
