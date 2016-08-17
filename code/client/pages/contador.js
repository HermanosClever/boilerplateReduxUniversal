import React, { Component, PropTypes } from 'react'
import styler      from 'react-styling'
import { connect } from 'react-redux'
import { bindActionCreators as bind_action_creators } from 'redux'

import { get as get_counter, add as add_counter, remove as substract_counter, dismiss_adding_error } from '../actions/counter'
import Button from '../components/button'

import { title }   from 'react-isomorphic-render'
import { preload } from 'react-isomorphic-render/redux'

@preload((dispatch, get_state) => dispatch(get_counter()))
@connect
(
	store => 
	({
		users         : store.users.users,
		loading       : store.users.loading,
		loaded        : store.users.loaded,
		stale         : store.users.stale,
		loading_error : store.users.loading_error,
		adding_error  : store.users.adding_error
	}),
	dispatch => bind_action_creators({ get_counter, add_counter, substract_counter, dismiss_adding_error }, dispatch)
)
export default class Page extends Component
{
	static propTypes =
	{
		get_counter         : PropTypes.func.isRequired,
		add_counter         : PropTypes.func.isRequired,
		substract_counter   : PropTypes.func.isRequired,
		counter               : PropTypes.number.isRequired,
		loading             : PropTypes.bool,
		loaded              : PropTypes.bool,
		stale               : PropTypes.bool,
		loading_error       : PropTypes.object,
		adding_error        : PropTypes.object
	}

	static contextTypes =
	{
		store : PropTypes.object.isRequired
	}

	constructor(props)
	{
		super(props)

		this.refresh     = this.refresh.bind(this)
		this.add_counter    = this.add_counter.bind(this)
		this.substract_counter = this.substract_counter.bind(this)
	
	}

	componentWillReceiveProps(next_props)
	{
		if (!this.props.stale && next_props.stale)
		{
			this.refresh()
		}

		if (next_props.adding_error)
		{
			alert('fallo al añadir')

			this.props.dismiss_adding_error()
		}
	}

	render()
	{
		const { error, loaded, counter } = this.props

		const markup = 
		(
			<section style={style.container} className="table">
				{title("Contador REST API")}


				<div  className="table-cell">
					<h1>Contador Rest API sin base de datos</h1>

					{this.render_counter(error, loaded, counter)}
				</div>
			</section>
		)

		return markup
	}

	render_counter(error, loaded, counter)
	{
		if (error)
		{
			const markup = 
			(
				<div>
					{'Fallo al refrescar'}

					{/* error.stack || error */}

					<button onClick={this.refresh}>Intentar de nuevo</button>
				</div>
			)

			return markup
		}

		if (!loaded)
		{
			return <div>Cargando...</div>
		}
		debugger;
		if (!!counter)
		{
			const markup = 
			(
				<div>
					No users

					<button onClick={this.add_counter} >Sumar</button>

					<button onClick={this.refresh} >Actualizar</button>
				</div>
			)

			return markup
		}

		const markup = 
		(
			<div>
				<span>Users</span>

				<button onClick={this.add_counter}>Sumar</button>
				
				<button onClick={this.refresh}>Actualizar</button>

				<div>
					<span>{counter}</span>

					<Button
						busy={this.props.deleting}
						on_click={event => this.substract_counter}
						text="Restar"/>
						
				
				</div>
			</div>
		)

		return markup
	}

	refresh()
	{
		this.props.get_counter()
	}

	add_counter()
	{
		const name = prompt(`Enter user's name`)
		
		if (!name)
		{
			return
		}

		this.props.add_counter({ name: name })
	}

	substract_counter(id)
	{
		this.props.substract_counter(id)
	}
}

const style = styler
`
	container
		position:absolute;
		top:0;
		left:0;
		height:100vh;

`