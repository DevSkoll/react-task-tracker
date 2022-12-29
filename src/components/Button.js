import PropTypes from 'prop-types'

const Button = ({color, text, addTask}) => {
	const addButton = {
		backgroundColor: color,
	};

	return (
		<button 
		onClick={() => addTask()} 
        style={addButton} className='btn'>
        {text}
        </button>
	)
}

Button.defaultProps = {
	color: 'steelblue'
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired
}


export default Button