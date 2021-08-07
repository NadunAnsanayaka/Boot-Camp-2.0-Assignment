import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Title from './components/Title';
import AddNewBlog from './components/AddNewBlog';
import Blog from './components/Blog';

function App() {
	return (
		<Router>
			<Title />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/create">
					<AddNewBlog/>
				</Route>
				<Route path="/posts/:id">
					<Blog />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
