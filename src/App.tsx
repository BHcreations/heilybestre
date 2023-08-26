import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<>
			<Routes>
				<Route path={`/${process.env.REACT_APP_APP_NAME}/`} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={`/${process.env.REACT_APP_APP_NAME}/about`} element={<About />} />
					{/* <Route path="*" element={<NoMatch />} /> */}
				</Route>
			</Routes>
			<Outlet />
		</>
	);
}

export default App;
