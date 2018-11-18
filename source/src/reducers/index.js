import { combineReducers } from 'redux';
import mapLayersReducer from './map';
import YandexForecastReducer from './yandexForecast';

export const rootReducer = combineReducers({
  forecast: YandexForecastReducer,
  mapLayers: mapLayersReducer,
});
