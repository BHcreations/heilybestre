import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PetSavvy from './pages/PetSavvy';
import MealPlannr from './pages/MealPlannr';

function App() {
	return (
		<>
			<Routes>
				<Route path={`/`} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={`/about`} element={<About />} />
					<Route path={`/work/petsavvy`} element={<PetSavvy />} />
					<Route path={`/work/mealplannr`} element={<MealPlannr />} />
					<Route path='*' element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
