import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar></Navbar>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/rooms/' element={<Rooms />} />
					<Route path='*' element={<Error />} />
					<Route path='/rooms/:slug' element={<SingleRoom />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
