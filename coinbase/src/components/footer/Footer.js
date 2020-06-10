import React, { Component, Fragment } from 'react'
import Line from '../../assets/Line.png'
import Testimonial from '../../assets/Testimonial.png'
import appstore from '../../assets/app-store-logo 1.png'
import getit from '../../assets/get-it-on-google-play-badge-png-google-play-badge-png-505 1.png'
import X1 from '../../assets/X-1.png'
import X2 from '../../assets/X-2.png'
import footerlogo from '../../assets/footerlogo.svg'
import bfooter from '../../assets/bfooter.svg'
import footercoinbase from '../../assets/footercoinbase.svg'
import box1 from '../../assets/box1.svg'


export class Footer extends Component {
    render() {
        return (
            <Fragment>
               <div class="footer">
        

        <div class="testimonials">
            <div class="testimonials-top">
                <div class="testimonials-btm">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2">

                            </div>
                            <div class="col-md-8 ht">

                                <div class="bubbles">
                                    <div class="heading">
                                        10,000 Satisfied clients <br /> around the world <br />
                                        <img src={Line} alt="" />
                                    </div>
                                    <div class="text">
                                        Yeah! we’re proud with numbers. We’ve helped thousands of clients <br />
                                        all around the world with our bespoke service. Hover ontop of them <br />
                                        pic to view their testimonials.
                                    </div>
                                    <div class="testimonial">
                                        <img src={Testimonial} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="download">
            <div class="download-top">
                <div class="heading">
                    Download our app <br />
                    <img src={Line} alt="" />
                </div>
                <div class="text">
                    Discover exclusive deals and discounts with <br />
                    our mobile experience.
                </div>
                <div class="images">
                    <img src={appstore} alt="" />
                    <img src={getit} alt="" />
                </div>

                <div class="images">
                    <img class="mr-2" src={X1} alt="" />
                    <img src={X2} alt="" />
                </div>
            </div>
        </div>
        <div class="newsletter">

            <div class="heading">
                Subscribe our newsletter <br />
            <img src={Line} alt="" />
            </div>
            <div class="text">
                Subscribe to our newsletter for daily/weekly <br />
                update of our products and services.
            </div>
            <div class="subscribe">
                <form>
                    <input type="email" name="newsletter" id="" placeholder="EMAIL" />
                    <a href="">DISCOVER</a>
            </form>
            </div>
        </div>
    </div>
    
        <div class="footer-container">
            <div>
                <div class="footer-logo"><img src={footerlogo} alt="" />
                    <div>
                        <img src={bfooter} class="bfooter" alt="" />
                        <a href="#"><img class="footerlgtxt" src={footercoinbase} alt="" /></a>
                    </div>
                    <div style={{color:'#A2A2A2'}}>
                        Fusce ut elit aliquet, fermentum leo vel, tempus <br /> nunc. Fusce eu rhoncus augue. Fusce vel
                        metus <br /> pharetra, fermentum
                    </div>
                    <div style={{padding:'1.5rem 1.5rem 0 0',marginRight:'1.8rem'}}>
                        <a style={{padding: '1.5'}} href="#"><i class="fa fa-google-plus "></i></a>
                        <a style={{padding: '1.5rem'}} href="# "><i class="fa fa-facebook "></i></a>
                        <a style={{padding: '1.5rem'}} href="# "><i class="fa fa-twitter "></i></a>
                        <a style={{padding: '1.5rem'}} href="# "><i class="fa fa-instagram "></i></a>
                    </div>
                </div>
            </div>
            <div class="coinbaselinks ">
                <div class="linkbox-1 ">
                    <h4 style={{paddingBottom:'10px', marginBottom: '20px', paddingbottom:'5px'}}> CoinBase links</h4>
                    <ul>
                        <li><a href="# ">Links</a></li>
                        <li><a href="# ">Home</a></li>
                        <li><a href="# ">About Us</a></li>
                        <li><a href="# ">Blog</a></li>
                        <li><a href="# ">Sell </a></li>
                        <li><a href="# ">Contact Us </a></li>
                    </ul>
                </div>
                <div class="linkbox-2 ">
                    <h4 style={{paddingBottom:'10px', marginBottom:'20px', paddingBottom:'5px'}}> Contact Us </h4>
                    <p style={{color:'#A2A2A2'}}>+234) 137632128 <br /> Coinbase@yahoo.com <br /> Address goes here
                    </p>
                    <small><a href=" ">Download Our App</a></small>
                </div>
            </div>
            <div class="boxes ">
                <h4 style={{paddingBottom: '10px', marginBottom: '20px',paddingBottom: '5px'}}>CoinBase Instagram</h4>
                <div class="block1 ">
                    <div><img src={box1} alt=" " /></div>
                    <div><img src={box1} alt=" " /></div>
                    <div><img src={box1} alt=" " /></div>
                    <div><img src={box1} alt=" " /></div>

                </div>
                <div class="block2 ">

                    <div><img src={box1} alt=" " /></div>
                    <div><img src={box1} alt=" " /></div>
                    <div><img src={box1} alt=" " /></div>
                    <div><img src={box1} alt=" " /></div>

                </div>
            </div>
        </div>            
            </Fragment>
        )
    }
}


export default Footer
