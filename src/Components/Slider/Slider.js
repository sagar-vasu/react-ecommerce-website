import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
    "mdbreact";

import Grid from '@material-ui/core/Grid';

const CarouselPage = () => {
    return (
        <Grid container>

            <Grid item  xs={12}>
            <div style={{ marginTop: '30px' }}>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner >
                    <MDBCarouselItem itemId="1" >
                        <MDBView >
                            <img
                                className="d-block w-100"
                                src="https://d1rkccsb0jf1bk.cloudfront.net/watchguide/v2banners/maincarousel/1800x500MC_tbpdy.png"
                                style={{ height: '400px' }}
                                alt="First slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img

                                className="d-block w-100"
                                src="https://cdn11.bigcommerce.com/s-17397/product_images/theme_images/main-banner-01__36061.jpg?t=1560403718"
                                alt="Second slide"
                                style={{ height: '400px' }}

                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://cdn11.bigcommerce.com/s-17397/product_images/theme_images/main-banner-2.jpg?t=1560403718"
                                alt="Third slide"
                                style={{ height: '400px' }}

                            />
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>

            </Grid>
        </Grid>
        


    );
}

export default CarouselPage;



