import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux';
import reducer from './stores.reducer';
import { Provider } from 'react-redux;'

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// Where we create Redux store
// The actual store is in its own folder
// npm instal --save react-redux
// We wrap Provider from react-redux around the app. Provider is a helper component that helps us inject store into components

//Steps to connect store to react 
//1. Store Folder with reducer method
//2. Import Store into Index.js
//3. Insalll react-redux package with node 
//4. Import the Provider Helper Component 
//5. Wrap Provider around the <App/> and pass store={store}
//6. Write const store = createStore and pass the reducer