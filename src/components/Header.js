import '../scss/Header.scss';


function Header() {
    return(
        /*  Заменить LOGO, image должен быть не вставлен в logo, а быть background-image*/

        <header>
            <div className="container header">
                <div className="header__logo" id='logo'>  
                    <label for="logo">serial.com</label>
                </div>
                <div className="header__item">
                    <div className="item__list">
                        <ul>
                            <li className='active'>Актеры</li>
                            <li>Новости</li>
                            <li id="episode">Серии</li>
                            <div className='dropdawn' for="episode">
                                <p>1 Сезон</p>
                                <p>Случайная серия</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;