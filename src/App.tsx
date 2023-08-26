import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		console.log('app name', import.meta.env.VITE_APP_NAME);
	});
	return (
		<>
			<Routes>
				<Route path={`/${import.meta.env.VITE_APP_NAME}/`} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={`/${import.meta.env.VITE_APP_NAME}/about`} element={<About />} />
					{/* <Route path="*" element={<NoMatch />} /> */}
				</Route>
			</Routes>
			<Outlet />
		</>
	);
}

export default App;
