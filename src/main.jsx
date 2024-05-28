import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/config/configStore';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Redux의 Provider 컴포넌트를 사용하여 Redux store 애플리케이션에 제공한다. */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
