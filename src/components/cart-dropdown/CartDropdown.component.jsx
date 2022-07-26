import './CartDropdown.styles.scss'
import Button from '../button/Button.component'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button>Checkout</Button>
      </div>
    </div>
  )
}

export default CartDropdown
