import { Button, Drawer } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { selectDrawerOpened, selectItems, toggleDrawer } from "../features/cart/cart";
import './Cart.css'
import Item from "./Item";

function Cart() {
  const drawerOpened = useSelector(selectDrawerOpened);
  const items = useSelector(selectItems);
  const dispatch = useAppDispatch();

  return (
    <div className="Cart">
      <Button
        variant="contained"
        onClick={() => dispatch(toggleDrawer())}>Cart ({items.length})</Button>
      <Drawer
        anchor={"right"}
        open={drawerOpened}
        onClose={() => dispatch(toggleDrawer())}
      >
        <div className='cart-contents'>
          <div style={{fontSize: '40px'}}>Cart</div>
          {items.map(item => (
            <div key={item.id}>
              <Item item={item} inCart={true} />
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default Cart;
