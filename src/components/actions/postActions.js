import {FETCH_BUTTON_CLICKED} from './types';

export const fetchPosts=()=>{
    return{
        type: FETCH_BUTTON_CLICKED,
        payload: [
            {
                userId: 1,
                id: 1,
                title: 'Hello friend 1',
                body: 'This is the body'
            },
            {
                userId: 1,
                id: 1,
                title: 'Hello friend 2',
                body: 'This is the body'
            },
            {
                userId: 1,
                id: 2,
                title: 'Hello friend 3',
                body: 'This is the body'
            },
            {
                userId: 1,
                id: 3,
                title: 'Hello friend',
                body: 'This is the body'
            },
        ]

    }
}