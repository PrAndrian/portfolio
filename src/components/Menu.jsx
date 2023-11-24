import PropTypes from 'prop-types';

const Menu = ({isOpen,setState}) => {
    const handleClose = () =>{
        setState(false)
    }

    return (
        <>
            <div className='fixed w-full h-screen bg-green-500 z-[950] transition-all duration-500' style={{top:`${isOpen ? "0%" : "-100%"}`}}></div>
            <div onClick={handleClose} className='fixed w-full h-screen bg-green-900 z-[999] transition-all duration-1000' style={{top:`${isOpen ? "0%" : "-100%"}`}}>
                Menu
            </div>
        </>
    )
}

Menu.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    setState : PropTypes.func.isRequired,
}

export default Menu