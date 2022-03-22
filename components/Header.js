import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <div className='container'>
          <div className="row">
            <div className="col-12">
              <div className="header-main">
                <div className='header-main__logo'>
                    <h1>
                        ЗАМЕТКА
                    </h1>
                </div>
                <ul className='header-main__list'>
                  <li><NavLink className="" to="/">Главная</NavLink></li>
                  <li><NavLink className="" to="/note">Искать</NavLink></li>
                  <li><NavLink className="" to="/create">Создать</NavLink></li>
                  <li><NavLink className="" to="/about">О нас</NavLink></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>      
    </header>
  );
}
  
export default Header;