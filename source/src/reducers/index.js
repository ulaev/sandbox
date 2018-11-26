import { combineReducers } from 'redux';
import mapLayersReducer from './map';
import gameTickStamp from './gameTick';
import ButtonPress from './buttonPress'

export const rootReducer = combineReducers({
  mapLayers: mapLayersReducer,
  gameTickStamp: gameTickStamp,
  buttons: ButtonPress
});
