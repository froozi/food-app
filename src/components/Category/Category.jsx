const Carts = () => {
    return(
        <div className="menu">
            <h1>Наше Меню</h1>
            <div className="menu__line"></div>
            <div className="menu__carts">
                <div className="menu_cart active">
                    <div className="menu_cart_img">
                        <img src="../src/assets/salate.svg" alt="" />
                    </div>
                    <div className="menu_cart_text">
                        Салаты
                    </div>
                </div>
                <div className="menu_cart">
                    <div className="menu_cart_img">
                        <img src="../src/assets/drink.svg" alt="" />
                    </div>
                    <div className="menu_cart_text">
                        Напитки
                    </div>
                </div>
                <div className="menu_cart">
                    <div className="menu_cart_img">
                        <img src="../src/assets/burger.svg" alt="" />
                    </div>
                    <div className="menu_cart_text">
                        Бургеры
                    </div>
                </div>
                <div className="menu_cart">
                    <div className="menu_cart_img">
                        <img src="../src/assets/potato.svg" alt="" />
                    </div>
                    <div className="menu_cart_text">
                        Закуски
                    </div>
                </div>
                <div className="menu_cart">
                    <div className="menu_cart_img">
                        <img src="../src/assets/pizza.svg" alt="" />
                    </div>
                    <div className="menu_cart_text">
                        Пицца
                    </div>
                </div>
                <div className="menu_cart">
                    <div className="menu_cart_img">
                        <img src="../src/assets/akcii.svg" alt="" />
                    </div>
                    <div className="menu_cart_text">
                        Акции
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carts;