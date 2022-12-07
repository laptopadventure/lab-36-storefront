import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { selectCategories, selectItems, selectSelectedCat, setCat } from '../features/cart/cart';
import { storeItems } from '../mock/mockData';
import Item from './Item';
import './Main.css';

function Main() {
  const categories = useSelector(selectCategories);
  const selectedCat = useSelector(selectSelectedCat);
  const items = useSelector(selectItems);

  const dispatch = useAppDispatch();

  const filteredItems = storeItems.filter(item => {
    if(item.category !== selectedCat) {
      return false;
    }
    if(items.includes(item)) {
      return false;
    }
    return true;
  })

  return (
    <div className="Main">
      <h3>Categories</h3>
      <div className="categories">
        {categories.map(cat => (
          <Button
            style={{margin: "1rem"}}
            variant={selectedCat === cat ? "contained" : "outlined"}
            onClick={() => dispatch(setCat(cat))}>
            {cat}
          </Button>
        ))}
      </div>
      <h3>Items in '{selectedCat}'</h3>
      <div className="categories">
        {filteredItems.map(item => (
          <div key={item.id} style={{padding: "1rem"}}>
            <Item item={item} inCart={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
