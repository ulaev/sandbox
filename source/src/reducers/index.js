import { combineReducers } from 'redux';
import mapLayersReducer from './map';
import gameTickStamp from './gameTick';
import YandexForecastReducer from './yandexForecast';
import ButtonPress from './buttonPress'

export const rootReducer = combineReducers({
  forecast: YandexForecastReducer,
  mapLayers: mapLayersReducer,
  gameTickStamp: gameTickStamp,
  buttons: ButtonPress
});
