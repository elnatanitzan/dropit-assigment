import styled from "styled-components";


const StyledCartView = styled.div`
.CatalogView__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-inline: 8px;
  margin-block: 16px;
  
  .CatalogView__header_text {
    font-size: 24px;
    font-weight: bold;
  }
  .CartIcon {
    svg { height: 48px; width: 48px;}
    margin-right: 24px;
  }
  }
  
  .Second__header {
    // width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    
    
    .Filter__container {
      padding: 0 24px;
      width: 100%;
      display: flex;
      gap: 24px;
      
      @media (max-width: 450px) {
        width: 100%;
        gap: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  
   
  }
  
  .ResultInfo {
    text-align: center;
    
    &.red { color: red; }
  }
  
  .CatalogView__grid {
    margin: 24px;

    .CatalogView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CatalogView__grid_addToCart {
      cursor: pointer;
    }
    .linkRow {
      display: table-row;
      vertical-align: middle;

    }

    .HoverPointer:hover {
      cursor: pointer;
      color: blue;
    }
  }
`;

export default StyledCartView;
