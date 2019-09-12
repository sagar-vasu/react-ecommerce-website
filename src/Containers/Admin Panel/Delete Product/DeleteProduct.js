import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper,ResponsiveDrawer } from '../../../Components'
import Typography from '@material-ui/core/Typography';


class DashboardUi extends React.Component {

    render() {
        return (
            <div>

                <Grid container justify="center" spacing={2}>
                    <Grid item xs={11} md={8} lg={4}>
                        <Paper>
                            <div style={{padding:"23px"}}>
                                <Typography align='center' variant='h5'>
                                    Total Orders
                                </Typography>
                                <br />
                                <Typography align='center' variant='body1'>
                                    01
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={11} md={8} lg={4}>
                        <Paper>
                            <div style={{padding:"23px"}} > 
                                <Typography align='center' variant='h5'>
                                    Total Product
                                </Typography>
                                <br />
                                <Typography align='center' variant='body1'>
                                    10
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>


                    <Grid item xs={11} md={8} lg={4}>
                        <Paper>
                            <div  style={{padding:"23px"}}>
                                <Typography align='center' variant='h5'>
                                    Total Sell
                                </Typography>
                                <br />
                                <Typography align='center' variant='body1'>
                                    5
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>



            </div>
        );
    }
}









export default class Home extends React.Component{
  render(){
    return(
      <div>
          <ResponsiveDrawer component ={ <DashboardUi />} />
       
      </div>
    )
  }
}


