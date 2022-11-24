import '../scss/Header.scss';


function Header() {
    return(

        <header>
            <div className="container ">
                <div className='row header'>
                    <div className='col-lg-5 col-10'>   
                        <div className="header__logo" id='logo'>  
                            <label for="logo">serial.com</label>
                        </div>
                    </div>
                    
                    <div className="header__item col-lg-7">
                            <div className="item__list">
                                <ul>
                                    <li className='active'>Актеры</li>
                                    <li>Новости</li>
                                    <li id="episode">Серии
                                        <div className='dropdawn' for="episode">
                                            <p>1 Сезон</p>
                                            <p>Случайная серия</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className='col-2 header__burger'>
                        <div className='burger__wrapper'>
                            <span className='line top'></span>
                            <span className='line middle'></span>
                            <span className='line bottom'></span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='burger__menu open__menu'>

            </div>
        </header>
    )
}

export default Header;