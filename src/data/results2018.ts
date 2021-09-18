import { v4 as uuidv4 } from 'uuid';
import { MarathonResult } from 'types';

const results2018: MarathonResult[] = [
    {
        id: uuidv4(),
        order: 1,
        name: 'Волков Владимир',
        result: '2:04:35',
    },
    {
        id: uuidv4(),
        order: 2,
        name: 'Подшивалов Никита',
        result: '2:15:12',
    },
    {
        id: uuidv4(),
        order: 3,
        name: 'Серафима Киблицкая',
        result: '2:23:35',
    },
];

export default results2018;
