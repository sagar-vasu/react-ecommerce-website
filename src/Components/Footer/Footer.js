import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
    return (
        <MDBFooter color="mdb-color" className="font-small grey  grey darken-3 pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="my-4">
                    <MDBCol md="4" lg="4">
                        <h1 className="text-uppercase mb-4 font-weight-bold">
                            e-Device
            </h1>
                        <p>
                        e-Device Online Shopping in Pakistan
            </p>
                        <p className="text-justify" >
                            Visit our site often to check our latest products and promotional offers. Stand out from the crowd with the latest branded goods and accessories. Be the envy of your friends and colleagues, be someone they look up to. Make sure to read our blog to keep up with the latest news on the newest products that have been added..{" "}
                        </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2" lg="2" className="ml-auto">
                        <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                        <ul className="list-unstyled">
                            <p>
                                <a href="#!">PROJECTS</a>
                            </p>
                            <p>
                                <a href="#!">ABOUT US</a>
                            </p>
                            <p>
                                <a href="#!">BLOG</a>
                            </p>
                            <p>
                                <a href="#!">AWARDS</a>
                            </p>
                        </ul>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="5" lg="3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                        <p>
                            <i className="fa fa-home mr-3" /> Karachi , Pakistan
            </p>
                        <p>
                            <i className="fa fa-envelope mr-3" /> dotstore@gmail.com
            </p>
                        <p>
                            <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
                        <p>
                            <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2" lg="2" className="text-center">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Follow us
            </h5>
                        <div style={{ fontSize: "2rem" }}>
                            <i className="fab fa-facebook-f fa-fw blue-text"></i>
                            <i className="fab fa-twitter fa-fw blue-text"></i>
                            <i className="fab fa-instagram fa-fw pink-text"></i>
                            <i className="fab fa-linkedin fa-fw blue-text"></i>
                        </div>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <span >.Store</span>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPagePro;