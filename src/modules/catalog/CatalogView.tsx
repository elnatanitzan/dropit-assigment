import React, {useState, useEffect, useMemo, useReducer} from "react";

import { LoadingSpinner, Table } from "../../tools/ui_components";
import rootReducer from "../../reducers/root.reducer"
import { CatalogProduct} from "../product/types";

import StyledCatalogView from "./StyledCatalogView";
import SelectInput from "../../tools/ui_components/SelectInput";
import useCatalog from "./useCatalog";


const CatalogView = () => {

  const [state, dispatch] = useReducer(rootReducer, {})
  const { isLoading, products, columns, getKeyRow } = useCatalog();
  
  const [categoryToShow, setCategoryToShow] = useState<CatalogProduct[]>([]);
  

  useEffect(
    () => {
      console.log(state)
      // setCategoryToShow(productsFromReducer.length > 0 ?  productsFromReducer : products)
      // console.log(products)
    },
    [products, state]
    // eslint-disable-line
    );
    
    useMemo(
      () => {
        setCategoryToShow(products)
        // setCategoryToShow(state.selectCategory ? state.selectCategory : products)
      },
      []// eslint-disable-line
    )
    
  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <div className="CatalogView__header_text">Catalog Page</div>
      </div>

      <h2>Filter By Category</h2>
      <SelectInput />
      <div className="CatalogView__grid">
        <Table columns={columns} data={categoryToShow} getKeyRow={getKeyRow} />
       {/* <Table columns={columns} data={products} getKeyRow={getKeyRow} /> */}
      </div>

      <LoadingSpinner isVisible={isLoading} />
    </StyledCatalogView>
  );
};

export default CatalogView;
