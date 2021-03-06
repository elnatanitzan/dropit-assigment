import { useState, useMemo} from "react";
import {useSelector} from "react-redux"
import { useHistory } from "react-router-dom";

import { LoadingSpinner, Table } from "../../tools/ui_components";
import { CartIcon } from "../../tools/icons";
import pathsApp from "../../contexts/navigation/pathsApp";

import StyledCatalogView from "./StyledCatalogView";
import SelectInput from "../../tools/ui_components/SelectInput";
import SearchInput from "../../tools/ui_components/SearchInput";
import SortInput from "../../tools/ui_components/SortInput";
import useCatalog from "./useCatalog";


const CatalogView = () => {

  const history = useHistory();

  const selectedCatalog = useSelector((state: any) => state.catalog.selectedCatalog)
  const resultEmpty = useSelector((state: any) => state.catalog.noResult)
  const resultInclude = useSelector((state: any) => state.catalog.resultInclude)

  const { isLoading, products, columns, getKeyRow } = useCatalog();
  
  const [categoryToShow, setCategoryToShow] = useState([]);
  
    useMemo(
      () => {
        if (selectedCatalog.length > 0) setCategoryToShow(selectedCatalog);
      },[selectedCatalog]
    )
    
  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <div className="CatalogView__header_text">Catalog Page</div>
        <div className="CartIcon" onClick={() => history.push(pathsApp.cart)}>
          <CartIcon />
        </div>
      </div>
        
      <div className="Second__header">
        <div className="Filter__container">
          <SearchInput />
          <SelectInput />
          <SortInput />
        </div>
      </div>

      {
      resultEmpty === true ?
       (<h3 className="ResultInfo red" >No result inclued `{resultInclude}` ...</h3>)
      : (
          <div className="CatalogView__grid">
            
            { (resultInclude !== '' && resultInclude !== ' ') && <h3 className="ResultInfo">Products that include `{resultInclude}`</h3>}
            
            {
            selectedCatalog.length > 0 ? <Table columns={columns} data={categoryToShow} getKeyRow={getKeyRow}/>
            : <Table columns={columns} data={products} getKeyRow={getKeyRow} />
            }
          </div>
        )
      }

      <LoadingSpinner isVisible={isLoading} />
    </StyledCatalogView>
  );
};

export default CatalogView;
