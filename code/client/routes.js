import React from 'react'

import { Router, Route, IndexRoute } from 'react-router'

import Layout           from './pages/layout'
import Not_found        from './pages/not found'
import Contador            from './pages/contador'
import Home             from './pages/home'

export default function() // ({ dispatch, getState })
{
	const routes =
	(
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}/>
			<Route path="contador" component={Contador}/>
			<Route path="*" component={Not_found}/>
		</Route>
	)

	return routes
}