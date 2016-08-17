import React, { Component, PropTypes } from 'react'

// testing `flat` styler
import styler   from 'react-styling/flat'

import { head } from 'react-isomorphic-render'

import Menu from '../components/menu'

export default class Layout extends Component
{
	static propTypes =
	{
		children : PropTypes.object.isRequired
	}

	render()
	{
		const logo = require('../../../assets/images/logo.png')
		// Html document metadata

		const title = 'Index Hermanos Clever'
		const description = 'Bboilerplate de Redux'

		const meta =
		[
			// <meta charset="utf-8"/>
			{ charset: 'utf-8' },

			// <meta name="..." content="..."/>
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },

			// <meta property="..." content="..."/>
			{ property: 'og:title',       content: 'Boilerplate de React Redux' },
			{ property: 'og:description', content: 'Live Reload, Webpack, React, Redux' },
			{ property: 'og:locale',      content: 'es-ES' }
		]


		const menu_items =
		[{
			name: 'Home',
			link: '/'
		}, {
			name: 'Users',
			link: '/users'
		}]

		const markup = 
		(
			<div className="content">
				{head(title, meta)}

				{/* header */}
				<header className="container" style={style.header}>
					{/* Navigation */}
					{/*<nav>*/}
						{/* main menu */}
						<a style={style.img} href="https://hermanosclever.com/" target="_blank"><img src={logo} /></a>
						<Menu items={menu_items}/>
					{/*</nav>*/}
				</header>

				{this.props.children}

				<footer></footer>
			</div>
		)

		return markup
	}
}

const style = styler
`
	header
		position:relative;
		z-index:9
		padding-top: 35px

	img
		float:left



`