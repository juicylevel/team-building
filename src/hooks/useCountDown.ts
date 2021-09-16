import moment from 'moment';
import 'moment-duration-format';
import { declOfNum } from 'helpers';
import { useCallback, useEffect, useRef, useState } from 'react';

const DAYS = ['день', 'дня', 'дней'];
const HOURS = ['час', 'часа', 'часов'];

const useCountDown = (deadline: string) => {
    const [result, setResult] = useState<string | null>();
    const intervalRef = useRef<number | undefined>();

    const getDuration = useCallback(() => {
        const now = moment();
        const end = moment(deadline) || now;
        return end.diff(now);
    }, [deadline]);

    const updateTime = useCallback((duration: number) => {
        const remining = moment.duration(duration);

        if (duration > 0) {
            const daysTitle = declOfNum(remining.days(), DAYS);
            const hoursTitle = declOfNum(remining.hours(), HOURS);

            const format = `D ${daysTitle} H ${hoursTitle} mm мин ss сек`;

            setResult(remining.format(format));
        } else {
            setResult(null);
        }
    }, []);

    const tick = useCallback(() => {
        const duration = getDuration();

        if (duration >= 0) {
            updateTime(duration);
        } else {
            clearInterval(intervalRef.current);
        }
    }, [getDuration, updateTime]);

    useEffect(() => {
        const duration = getDuration();
        if (duration >= 0) {
            updateTime(duration);
            intervalRef.current = +setInterval(() => tick(), 1000);
        }
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [getDuration, updateTime, tick]);

    return result;
};

export default useCountDown;
