import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
