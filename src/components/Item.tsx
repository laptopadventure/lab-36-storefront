import { Button } from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { addItem, remItem, StoreItem } from "../features/cart/cart";

interface ItemProps {
  item: StoreItem;
  inCart: boolean;
}

function Item(props: ItemProps) {
  const dispatch = useAppDispatch();

  const {item, inCart} = props
  return (
    <div className="Item">
      <img src={item.src} alt={item.name} style={{height: "100px", width: "100px"}} />
      <h4>{item.name}</h4>
      {inCart ? (
        <Button variant="contained" onClick={() => dispatch(remItem(item))}>Remove</Button>
      ) : (
        <Button variant="contained" onClick={() => dispatch(addItem(item))}>Add to Cart</Button>
      )}
    </div>
  );
}

export default Item;
