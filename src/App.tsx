import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import PetSavvy from './pages/PetSavvy';

function App() {
	return (
		<>
			<Routes>
				<Route path={`/`} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={`/about`} element={<About />} />
					<Route path={`/work/petsavvy`} element={<PetSavvy />} />
					{/* <Route path="*" element={<NoMatch />} /> */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
