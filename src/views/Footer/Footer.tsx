import { Divider, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Href, Marker } from 'components';
import { HFlexBox, VFlexBox } from 'components/flexBox';

const Wrapper = styled(VFlexBox)({
    color: '#fff',
    backgroundColor: '#333',
    padding: '60px',
    '& > hr': {
        backgroundColor: '#444',
    },
});

const Footer = () => (
    <Wrapper spacing={3}>
        <div>
            <Typography>
                Победитель команды <Marker>PSCB</Marker> получит годовую клубную
                карту в SPORTLIFE.
            </Typography>
            <Typography>
                Занявшие вторые и третьи места не получат ничего :)
            </Typography>
            <Typography>
                Все участники получают фирменные футболки или майки PSCB и
                обязательно бегут в них.
            </Typography>
            <Typography>
                Плюс отличное настроение от пробежки для всех.
            </Typography>
        </div>
        <Typography>
            Собираемся в <Marker>10:00</Marker> в Сестрорецке на площади Свободы
            для общей разминки.
        </Typography>
        <Divider />
        <div>
            <Typography>Примерная программа:</Typography>
            <Typography>10:20 - детские забеги</Typography>
            <Typography>10:30 - разминка</Typography>
            <Typography>11:00 - старт на дистанцию 21,097 м</Typography>
            <Typography>14:00 - награждение</Typography>
        </div>
        <Divider />
        <HFlexBox spacing={2}>
            <Href href="https://www.pscb.ru/">АО Банк ПСКБ</Href>
            <Href href="tel:+79095800040">
                По всем вопросам +7 (909) 580-00-40
            </Href>
        </HFlexBox>
    </Wrapper>
);

export default Footer;
