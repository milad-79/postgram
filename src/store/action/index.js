import * as api from '../../api';
import { GET_POST } from '../type';

export const getPost = ()=>({
    type: GET_POST,
    payload: api.Api() 
})
