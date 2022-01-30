import { useState, useMemo} from "react";
import {useSelector} from "react-redux"
import { useHistory } from "react-router-dom";

import StyledCartView from "./StyledCartView";
import { BackIcon } from '../../tools/icons/IconBack';
import { Table } from "../../tools/ui_components";
import LoginInput from "../../tools/ui_components/LoginInput";
import useCart from "./useCart";


const CartView = () => {

  const history = useHistory();

  const username = useSelector((state: any) => state.cart.username)

  const [dispalyUsername, setDisplayUsername] = useState<any>('')
 

  const { products, columns, getKeyRow } = useCart();

  useMemo(
    () => {
      if (username.length > 0 ) setDisplayUsername(username)
    },[username]
  )
  return (
    <StyledCartView>
    <div className="CatalogView__header">
      <div className="CatalogView__header_text">Cart Page</div>
      <div className="BackIcon" onClick={() => history.goBack()}>
          <BackIcon />
      </div>
    </div>

    <div className="Second__header">
        <div className="Filter__container">
          <LoginInput />
          { username.length > 0 && <h4>Wealcome {dispalyUsername}</h4>}
        </div>
      </div>
      
    <div className="CatalogView__grid">
      <Table columns={columns} data={products} getKeyRow={getKeyRow}/>
    </div>

  </StyledCartView>
  )
}

export default CartView;
