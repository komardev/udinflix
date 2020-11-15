import ApiRequest from './config';
import baseUrl from './url';

const API = {};

API.Main = ApiRequest.get(baseUrl.main);

export default API;