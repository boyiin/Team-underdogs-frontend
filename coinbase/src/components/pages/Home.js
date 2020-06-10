import React, { Component, Fragment } from 'react'
import IMG from "../../assets/IMG.png";
import Layer from "../../assets/Layer 2.png";
import Line from "../../assets/Line.png";
import Infopix from "../../assets/info..png";
import Gift from "../../assets/Gift cards.svg";
import Vector from "../../assets/vec.svg";
import coinbaseguy from "../../assets/coinbaseguy.svg";

export class Home extends Component {
    render() {
        return (
            <Fragment>
                    <div class="first-section">
        <div class="first-section-btm">
            <div class="container">
                <div class="row">
                    <div class="both">
                        <div class="col-md-6 col-sm-6">
                            <div class="intro">
                                We provide easy solution <br />
                                to exchange your <b> Bitcoin/ <br />
                                    GiftCard for money </b>
                            </div>
                            <div class="intro2">
                                CoinBase is a platform for trading your bitcoin and <br />
                                giftcard at the best rate, why not give us a trial.
                            </div>
                            <div class="get-started">
                                <a href="">GET STARTED</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <img class="inherit spark" src={IMG} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="welcome">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img class="inherit" src={Layer} alt="" />
                </div>
                <div class="col-md-6">
                    <div class="welcome-title">
                        Welcome to CoinBase <br />
                        <img src={Line.png} alt="" />
                    </div>
                    <div class="welcome-spc mt-3">
                        We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program
                        and earn commission from each exchange. The earnings are credited in your account instantly and
                        can be withdrawn right away. Also note some exchange directions are hidden for unregistered
                        user. To ensure to have access to all our exchange directions and benefits kindly sign up and
                        verify your identity.
                    </div>
                    <div class="discover">
                        <a href="">DISCOVER</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="rates">
        <div class="rates-top">
            <div class="rates-btm">
                <div class="col">
                    <div class="row">
                        <div class="col-md-2">

                        </div>
                        <div class="col-md-8">
                        <div class="rates-card">
                                <img src={Infopix} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="coinbase-experience">

            <div class="coinbase-texts">
               
                <h2 id="experience">Great experience with CoinBase </h2>
                <div class="coinbase-line"></div>
                <p>CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange
                    digital and fiat assets safely. Owned and managed by CoinBase Business Services established and
                    Incoperated in Nigeria.
                </p>
                <button class="btn-coinbase" type="button"><a href="#">DISCOVER</a></button>
            </div>

            <div class="coinbase-image"><img  src={coinbaseguy} alt="" />
            </div>

        </div>

    </div>


    <div class="trade-image">
      
        <div class="trade-box">

            <div class="trade-text">
                <h2>Trade from anywhere</h2>
                <div class="trade-line"></div>
            </div>

            <div class="trade-column">

                <div class="trade-wrap">
                    <div class="bitcoin">
                        <img class="trade-logo" src={Vector}alt="" />
                        <h3>Bitcoin</h3>
                    </div>
                </div>

                <div class="trade-wrap">
                    <div class="gift-card">
                        <img class="trade-logo-1" src={Gift} alt="" />
                        <h3>Gift Cards</h3>
                    </div>
                </div>

            </div>

        </div>

    </div>
            </Fragment>
        )
    }
}

export default Home
