/**
 * Created by sahil-dua on 26/4/17.
 */
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../middlewares/index'
import {reducerThunk} from '../reducers/index'

const middlewares1 = applyMiddleware(...middlewares);
export const store = createStore(reducerThunk, middlewares1);