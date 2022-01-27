import { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import StyledProductView from './StyledProductView';
import { BackIcon } from '../../tools/icons/IconBack';
import { AddToCartIcon } from '../../tools/icons/IconAddToCart';
import { CartIcon } from '../../tools/icons/IconCart';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductView = () => {

  const dispatch = useDispatch();

  const idParams: any = useParams();
  const id = ~~idParams.productId;
  const products = useSelector((state: any) => state.catalog.products)
  const productToDisplay = products.filter((item: any) => item.id === id);
  const extractProduct = productToDisplay[0];

  const [expanded, setExpanded] = useState(false)

  const history = useHistory();

  const addTocart = () => {
    dispatch({type: 'ADD_ITEM_TO_CART', product: extractProduct});
  }

  return(
    <StyledProductView>
        <div className="ProductView__header">
          <div className="ProductView__header_text">product Page</div>
          <div className="Filter__container">
            <div className="CartIcon">
              <CartIcon />
            </div>
            <div className="BackIcon" onClick={() => history.goBack()}>
              <BackIcon />
            </div>
          </div>
        </div>

        <div className="Second__header">
      </div>
      {
      <div className="Producd__Card">
        <Card sx={{ maxWidth: '370px'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {extractProduct.rating.rate}
            </Avatar>
          }
          action={  
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              ⭐
            </Avatar>
          }
          title={`Category: ${extractProduct.category}`}
          subheader={`Pepole who like this product: ${extractProduct.rating.count}`}
        />
        <CardMedia
          component="img"
          height="400"
          image={extractProduct.image}
          alt={extractProduct.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
          {extractProduct.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <IconButton aria-label="add to cart" onClick={addTocart}>
            <AddToCartIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            Product ID:     
          </Typography>
          <Typography variant="body2" color="text.primary">
            {extractProduct.id}     
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price:
          </Typography>
          <Typography variant="body2" color="text.primary">
            {extractProduct.price}
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {extractProduct.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </div>
      }
    </StyledProductView>
  )
}

export default ProductView;
