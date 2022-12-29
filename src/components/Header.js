import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ text, addTask }) => {
	return (
		<header className='header'>
			<h1>{text}</h1>
			<Button 
	        color='green'
	        text='Add'
	        addTask={addTask}/>
		</header>
		)
}

Header.defaultProps = {
	title: 'Task Tracker v1',
}

Header.propTypes = {
	title: PropTypes.string,
}

// CSS in JS
// const headingStyle = {
//	color: 'red';
//	backgroundColor: 'black',
// }

export default Header