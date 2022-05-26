function Drawer() {
    return (
        <article style={{ display: "none" }} className="overlay">
            <div className="drawer">
                <h2>Ваша корзина <img src="/images/removeButton.svg" alt="Remove button" className="remove-button cu-p" /></h2>

                <article className="items">
                    <div className="cart-item d-flex align-center">
                        <img className="mr-20" src="/images/sneakers/image 3.jpg" alt="sneakers" width={70} height={70} />
                        <div className="mr-20">
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 rub.</b>
                        </div>
                        <img src="/images/removeButton.svg" alt="Remove button" className="remove-button" />
                    </div>
                    <div className="cart-item d-flex align-center">
                        <img className="mr-20" src="/images/sneakers/image 3.jpg" alt="sneakers" width={70} height={70} />
                        <div className="mr-20">
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 rub.</b>
                        </div>
                        <img src="/images/removeButton.svg" alt="Remove button" className="remove-button" />
                    </div>
                    <div className="cart-item d-flex align-center">
                        <img className="mr-20" src="/images/sneakers/image 3.jpg" alt="sneakers" width={70} height={70} />
                        <div className="mr-20">
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 rub.</b>
                        </div>
                        <img src="/images/removeButton.svg" alt="Remove button" className="remove-button" />
                    </div>
                </article>
                <article className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>21 498 rub.</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>1074 rub.</b>
                        </li>
                    </ul>
                    <button className="greenBtn">Оформить заказ <img src="/images/arrow.svg" alt="arrow"></img></button>
                </article>
            </div>
        </article>
    )
}

export default Drawer