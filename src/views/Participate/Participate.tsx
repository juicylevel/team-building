import { Typography } from '@material-ui/core';
import { Href, Mailto, Marker } from 'components';
import { CenterFlexBox, VFlexBox } from 'components/flexBox';
import { MANAGER_EMAIL, MARATHON_SESTRORETSK_2019 } from 'configs/urls';
import { Section } from 'views/common/layout';

const Participate = () => (
    <Section color="#fffbf0">
        <CenterFlexBox height="100%">
            <VFlexBox spacing={3}>
                <Typography variant="h3">Хочу! Что делать?</Typography>
                <ol>
                    <li>
                        <Href href={MARATHON_SESTRORETSK_2019}>
                            Регистрируйся
                        </Href>{' '}
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
                </ol>
            </VFlexBox>
        </CenterFlexBox>
    </Section>
);

export default Participate;
