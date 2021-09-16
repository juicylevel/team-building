import { CenterFlexBox } from 'components/flexBox';
import { useCountDown } from 'hooks';
import { ContentSectionTitle } from 'views/common';
import { Section } from 'views/common/layout';

const EventCountdown = () => {
    const countDown = useCountDown('2022-05-01T10:00:00');
    return (
        <Section>
            <CenterFlexBox height="100%">
                <ContentSectionTitle variant="h2">
                    {countDown ? (
                        <>
                            {countDown}
                            <br />
                            До старта
                        </>
                    ) : (
                        <>Марафон уже прошёл</>
                    )}
                </ContentSectionTitle>
            </CenterFlexBox>
        </Section>
    );
};

export default EventCountdown;
