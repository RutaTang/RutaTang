import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Amplify  from 'aws-amplify';
import PubSub from "@aws-amplify/pubsub";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
PubSub.configure(awsconfig);


import './index.css'
import Home from './pages/Home'
import Blog from './pages/Blog'


ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/blog" element={<Blog />} /> 
			<Route path="*" element={<h1>404</h1>} />
		</Routes>
	</BrowserRouter>
	,
	document.getElementById('root')
)
