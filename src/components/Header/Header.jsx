const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <p><span>Food</span>House</p>
            </div>
            <nav>
                <ul>
                    <li><span>Главная</span></li>
                    <li>Меню</li>
                    <li>Сервис</li>
                    <li>О нас</li>   
                </ul>
            </nav>
            <div className="header__basket">
                <i class="fa-sharp fa-solid fa-basket-shopping"></i>
            </div>
        </header>
    )
}
export default Header;