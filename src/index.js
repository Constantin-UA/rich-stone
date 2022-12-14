//React
import React from 'react';
import ReactDOM from 'react-dom/client';
//Other css imports

//Custom
import App from './components/app/App';

//Style
import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
