const Hero = () => {
    return(
        <div className="hero">
            <div className="hero__text">
                <div className="hero__title">
                    Экспрес-доставка от Яндекс.Еды
                </div>
                <div className="hero__name">
                    Быстро и вкусно<span className="hero_name_span">.</span> 
                </div>
                <div className="hero__info">
                    Сеть быстрого питания #1 в Казани
                </div>
                <div className="hero__button">
                    <button className="hero_button">
                        Сделать заказ
                    </button>
                    <div className="hero_button_info">
                        бесплатная доставка от 500 рублей
                    </div>
                </div>
            </div>
            <div className="hero__img">
                <img src="../src/assets/banner.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;