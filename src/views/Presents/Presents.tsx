import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { CenterFlexBox, VFlexBox } from 'components/flexBox';
import { Section } from 'views/common/layout';

const Presents = () => (
    <Section color="#fffbf0">
        <CenterFlexBox height="100%">
            <VFlexBox spacing={3} alignItems="center">
                <Typography variant="h3">Победителям - медали!</Typography>
                <Typography variant="h3">Участникам - футболки</Typography>
                <Typography variant="h3">Всем отличное настроение</Typography>
            </VFlexBox>
        </CenterFlexBox>
    </Section>
);

export default Presents;
