function Drawer({ onCartClose, cartItems = [], onRemove}) {
    return (
        <article className="overlay">
            <div className="drawer">
                <h2>Ваша корзина <img onClick={onCartClose} src="/images/removeButton.svg" alt="Remove button" className="remove-button cu-p" /></h2>

                <article className="items">
                    {cartItems.map((obj) => (
                        <div className="cart-item d-flex align-center" key={obj.id}>
                            <img className="mr-20" src={obj.imageUrl} alt="sneakers" width={70} height={70} />
                            <div className="mr-20">
                                <p className='mb-5'>{obj.description}</p>
                                <b>{obj.price} rub.</b>
                            </div>
                            <img src="/images/removeButton.svg" alt="Remove button" className="remove-button" onClick={() => onRemove(obj.id)} />
                        </div>
                    ))}
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