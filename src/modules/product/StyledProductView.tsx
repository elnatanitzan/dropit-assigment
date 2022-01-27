import styled from "styled-components";

const StyledProductView = styled.div`

.ProductView__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 8px;
  margin-block: 16px;
    
    .ProductView__header_text {
      font-size: 24px;
      font-weight: bold;
    }

    .Filter__container {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      
      .CartIcon {
        svg { height: 48px; width: 48px;}
        
      }
      
      .BackIcon, .BackIcon:hover  {
        svg {
          transform: rotate(180deg);
          height: 60px; width: 60px;
          dispaly: flex;
          justify-content: center;
        
        }
      }

      svg:hover {
        cursor: pointer;
        fill: #707070;
        transform: scale(101%);
        transition: scale .2s ease;
      }
    }  
  }

  .Second__header {
    // display: flex;
    // justify-content: space-between;
    
    
  }

  .Producd__Card {
    display: grid;
    place-items: center;
    padding: 0 24px;
  }
`;
  

export default StyledProductView;
