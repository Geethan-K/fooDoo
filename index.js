import { registerRootComponent } from 'expo';
//import {combineReducers} from 'redux';
//import cartReducer from './cartReducer';
import App from './App';

// let reducers = combineReducers({
//     cartReducers:cartReducer
// })

//const rootReducer = ()

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
