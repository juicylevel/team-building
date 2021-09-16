import { Href, Mailto, Marker } from 'components';
import { styled } from '@material-ui/core/styles';
import { VFlexBox } from 'components/flexBox';
import { MANAGER_EMAIL, MARATHON_SESTRORETSK_2019 } from 'configs/urls';
import { ContentSectionTitle } from 'views/common';
import { Section } from 'views/common/layout';

const Ol = styled('ol')({
    textTransform: 'uppercase',
    fontSize: '2rem',
    '& > li': {
        marginBottom: '1.34rem',
    },
});

const Participate = () => (
    <Section color="#fffbf0">
        <VFlexBox
            spacing={10}
            height="100%"
            alignItems="center"
            justifyContent="center"
        >
            <ContentSectionTitle variant="h2">
                Хочу! Что делать?
            </ContentSectionTitle>
            <Ol>
                <li>
                    <Href href={MARATHON_SESTRORETSK_2019}>Регистрируйся</Href>{' '}
                    на полумарафон (дистанция <Marker>21</Marker> км)
                </li>
                <li>
                    <Mailto
                        email={MANAGER_EMAIL}
                        subject="PSCB Team - регистрация"
                        body="Ваш свой стартовый номер:"
                    >
                        Сообщите
                    </Mailto>{' '}
                    свой стартовый номер и размер футболки
                </li>
                <li>Срочно начинай тренироваться, в конце концов!!!</li>
            </Ol>
        </VFlexBox>
    </Section>
);

export default Participate;
