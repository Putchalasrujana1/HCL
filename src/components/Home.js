import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ytimg.com/vi/BnggSSaharc/maxresdefault.jpg" className="d-block w-100 h-50" data-interval="10000" script={{ height: 10 }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>All items at ur place</h5>
                            <p>Chineese,italian,indian,russian,american cusins....</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://news.ufl.edu/media/newsufledu/images/2018/11/Food-Traceability.jpg" data-interval="10000" className="d-block w-100" script={{ height: 10 }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Enjoy the meal at your place</h5>
                            <p>At any time and At any place</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/toyug-kebabs-azerbaijan.jpg" data-interval="10000" className="d-block w-100" script={{ height: 10 }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Get ur Food from ur favourite restuarant</h5>
                            <p>From anywhere at ur Location</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.healthline.com/hlcmsresource/images/chinese_food-732x549-thumbnail.jpg" data-interval="10000" className="d-block w-100" script={{ height: 10 }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Home delivery with maintaince of good higine</h5>
                            <p>Following WHO sanitization standards preparing the food</p>
                        </div>
                    </div>
                </div>
                <NavLink className="carousel-control-prev" to="#carouselExampleIndicators" activeClassName="active" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </NavLink>
                <NavLink className="carousel-control-next" to="#carouselExampleIndicators" activeClassName="active" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </NavLink>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div>

                </div>
            </div>
        )
    }
}
export default Home;