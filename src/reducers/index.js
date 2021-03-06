import {combineReducers} from 'redux';
import MetaReducer from './MetaReducer';
import APIReducer from './APIReducer';
import BrandReducer from './BrandReducer';

export default combineReducers({
    meta: MetaReducer,
    api: APIReducer,
    brands: BrandReducer
});
