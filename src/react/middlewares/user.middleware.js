/**
 * Created by sahil-dua on 26/4/17.
 */
export const logger = (store) => (next) => (action) => {
    next(action);
}