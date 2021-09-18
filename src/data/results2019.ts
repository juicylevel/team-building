import { v4 as uuidv4 } from 'uuid';
import { MarathonResult } from 'types';

const results2019: MarathonResult[] = [
    {
        id: uuidv4(),
        order: 1,
        name: 'Копытов Сергей',
        result: '1:38:01',
    },
    {
        id: uuidv4(),
        order: 2,
        name: 'Кузин Александр',
        result: '1:38:12',
    },
    {
        id: uuidv4(),
        order: 3,
        name: 'Музыка Павел',
        result: '1:42:33',
    },
    {
        id: uuidv4(),
        order: 4,
        name: 'Винник Михаил',
        result: '1:49:07',
    },
    {
        id: uuidv4(),
        order: 5,
        name: 'Олейникова Людмила',
        result: '1:49:40',
    },
    {
        id: uuidv4(),
        order: 6,
        name: 'Гилей Татьяна',
        result: undefined,
    },
];

export default results2019;
