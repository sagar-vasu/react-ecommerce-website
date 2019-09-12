import React from "react";
import { MDBView, MDBMask, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, } from 'mdbreact';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
const CardExample = (props) => {
 
  return (
    <MDBCard 
      style={{
        width: "21.6rem", display: 'inline-block',
        margin: '11px', cursor: 'pointer'
      }}>
        <div onClick={() => props.path.history.push('product', {
      title: props.title,
      url: props.url,
      price: props.price,
      description: props.detail
    })}>


      <MDBView hover zoom>
        <img
          src={props.url}
          className="img-fluid"
          alt="product"
          style={{ cursor: 'pointer' }}
        />
        <MDBMask className="flex-center">
        </MDBMask>
      </MDBView>
      <MDBCardBody>
        <MDBCardTitle>{props.catogory}</MDBCardTitle>
        <MDBCardText>
          {props.title}
        </MDBCardText>
        <h5 className="black-text ">Price : {props.price}</h5>
        {props.rating}

        
        <Button size='small' color='secondary' variant='outlined'>
          <ShoppingCartIcon /> Add To Cart
        </Button>
        <Button size='small' style={{ marginLeft: '4px' }} color='secondary' variant='outlined'>
          <FavoriteSharpIcon /> Whishlist
        </Button>
      </MDBCardBody>
      </div>


    </MDBCard>
  )
}

export default CardExample;