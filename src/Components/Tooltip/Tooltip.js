import React from "react";
import Popup from "reactjs-popup";
import './Tooltip.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

function RemoveProduct() {
  alert(90)

}

const ToolTipPositions = (props) => (

  <div >
    <Popup
      trigger={props.name}
      position="bottom right"
      on="hover"
      className='popup-content'
    >
      <div style={{ color: 'black', width: "240px" }}>
        {
          props.data.length ?
            <div>
            
              {
                props.data.map((val, ind) => {
                  return <div key={ind} style={{ paddingTop: '2px', paddingBottom: '2px', display: 'flex', borderBottom: '1px solid #878a8f' }}>
                    <table>
                      <td className="td-width">
                        <img src={val.productUrl} alt='product ' width="50" height='50' />
                      </td>
                      <td className="td-width">
                        {/* <span style={{ color: "black", marginLeft: "8px", }}>{val.productName}</span> */}
                      </td>
                      <td className="td-width">
                        <span style={{ color: "black", marginLeft: '20px' }}>{val.productQuantity}</span>
                      </td>
                      <td className="td-width">
                        <span style={{ color: "black", marginLeft: '20px' }}>Rs:{val.productPrice}</span>
                      </td>
                      <td className="td-width">
                        <span style={{ marginLeft: '50px', color: "#F50057", fontWeight: "bold" }} >
                          <DeleteForeverSharpIcon onClick={() => RemoveProduct(val, ind)} />
                        </span>
                        {/* <span onClick={() => {
                          val.splice(ind, 1);
                          localStorage.setItem('cartDetail', JSON.stringify(value))
                        }} style={{ color: "black", marginLeft: "20px", color: "red", fontWeight: "bold" }}>X</span> */}
                      </td>
                    </table>

                  </div>




                })
              }

            </div>
            :
            <span>Your Shopping Cart is Empty</span>
        }

        <Button disabled={props.data.length ? false :true} style={{ marginTop: '20px' }} onClick={() => props.path.history.push('/viewcart', { data: props.data })} color='secondary' variant='outlined'>
          <ShoppingCartIcon /> View Cart
        </Button>

        <br />
        <br />


      </div>
    </Popup>



  </div>
);


const ToolTipPositions1 = (props) => (

  <div >
    <Popup
      trigger={props.name}
      position="bottom right"
      on="hover"
      className='popup-content'
    >
      <div style={{ color: 'black', width: "240px" }}>
        
     

        <Button style={{ marginTop: '20px' }} onClick={() => props.path.history.push('/viewcart', { data: props.data })} color='secondary' variant='outlined'>
          <ShoppingCartIcon /> View WhishList
        </Button>

        <br />
        <br />


      </div>
    </Popup>



  </div>
);

export {ToolTipPositions,
  ToolTipPositions1


}
