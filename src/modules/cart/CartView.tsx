import { useState, useMemo} from "react";
import {useSelector} from "react-redux"
import { useHistory } from "react-router-dom";

import StyledCartView from "./StyledCartView";
import { BackIcon } from '../../tools/icons/IconBack';
import { LoadingSpinner, Table } from "../../tools/ui_components";
import useCart from "./useCart";


const CartView = () => {

  const history = useHistory();

  const { products, columns, getKeyRow, total, itemCount } = useCart();

  return (
    <StyledCartView>
    <div className="CatalogView__header">
      <div className="CatalogView__header_text">Cart Page</div>
      <div className="BackIcon" onClick={() => history.goBack()}>
          <BackIcon />
      </div>
    </div>
      
        <div className="CatalogView__grid">
          <Table columns={columns} data={products} getKeyRow={getKeyRow}/>
        </div>

  </StyledCartView>
  )
}

export default CartView;
