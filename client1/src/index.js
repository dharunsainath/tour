import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Provider } from 'react-redux';
import store from './redux/store';

import "./index.css"



const Index = () => (
    <Provider store={store}>
       <App/>
    </Provider>
)

ReactDOM.render(<Index/>,document.getElementById('root'))


