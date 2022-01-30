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
  .BackIcon {
    svg {
      transform: rotate(180deg);
      height: 60px; width: 60px;
      dispaly: flex;
      justify-content: center;
      cursor: pointer;

      &: hover {
        fill: #707070;
        transform: scale(101%) rotate(180deg);
        transition: scale .2s ease;
      }
    }
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
