import './runtime-shim';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
	createRoot(rootEl).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
} else {
	// If root element is missing, fail gracefully in dev
	console.warn('Root element not found');
}
