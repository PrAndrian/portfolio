import logo from '../assets/logo.svg'
import PropTypes from 'prop-types'

const Logo = ({classNames=""}) => {
  return (
    <img src={logo}  className={classNames}  alt="Princy-logo"/>
  )
}

Logo.propTypes  = {
    classNames: PropTypes.string,
}

export default Logo