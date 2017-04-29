

import thunkMiddleware from 'redux-thunk';
import {logger} from './user.middleware'

export const middlewares = [logger, thunkMiddleware]