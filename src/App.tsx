import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<>
			<Routes>
				<Route path='/heilybestre/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/heilybestre/about' element={<About />} />
					{/* <Route path="*" element={<NoMatch />} /> */}
				</Route>
			</Routes>
			<Outlet />
		</>
	);
}

export default App;
