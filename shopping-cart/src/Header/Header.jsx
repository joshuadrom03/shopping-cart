import './header.css'
 
 const Header = () => {

    return(
        <div className="header">
            <fieldset className='company'>
            <img src="./shopping.png" className='company-icon'></img>
            <p>Buy & Get</p>
            </fieldset>
            
            <img src='./search.svg' onClick={alert} className='search'></img>
            <input 
            type='text'
            placeholder='search for item...'
            className='search-bar'
            />

        </div>
    )

 }

 export default Header;