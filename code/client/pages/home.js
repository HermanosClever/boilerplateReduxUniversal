import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import styler      from 'react-styling'
import { title }   from 'react-isomorphic-render'

export default class Page extends Component
{
	render()
	{
		const logo = require('../../../assets/images/logo.png')

		const markup = 
		(
			<section className="table" style={style.container}>
				{title("Hermanos Clever")}
				<div className="table-cell">
					<h1 style={style.header}>
						BoilerPlate Redux
					</h1>

					<img src={logo} style={style.image}/>
				</div>
			</section>
		)

		return markup
	}
}

const style = styler
`
	container
		position:absolute;
		top:0;
		left:0;
		height:100vh;

	header
		text-align: center;
		font-weight:bold;

	image
		display: block;
		margin-left  : auto;
		margin-right : auto;


`