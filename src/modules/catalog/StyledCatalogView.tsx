import styled from "styled-components";

const StyledCatalogView = styled.div`
  .CatalogView__header {
    display: flex;
    align-items: center;

    margin-inline: 8px;
    margin-block: 16px;

    .CatalogView__header_text {
      font-size: 24px;
      font-weight: bold;
    }
  }
  
  .Filter__container {
    display: flex;
    justify-content: space-between;
    margin: 48px 24px 0 24px;
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
  }
`;

export default StyledCatalogView;
