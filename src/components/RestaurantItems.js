import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantById, fetchMenuItemsById } from '../actions/allActions';



class RestaurantItems extends Component {



    componentDidMount() {
        this.props.fetchRestaurantById(this.props.match.params.restaurantId)
        this.props.fetchMenuItemsById(this.props.match.params.restaurantId)
    }

    mapMenuItems() {
        const menuItemCards = this.props.menuItems.map((menuItem, index) =>
            <div class="card my-3" key={index}>
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <img src={menuItem.itemImg} className="card-img border" alt="..." style={{ width: 114, height: 100 }} />
                    </div>
                    <div className="col-sm-7 d-flex">
                        <div className="card-body ">
                            <h6 className="card-title ">{menuItem.itemName}</h6>
                            <p className="card-text text-secondary"><i className="fas fa-rupee-sign mr-1"></i>{menuItem.itemPrice}</p>
                        </div>
                    </div>
                    <div className="col-sm d-flex align-items-center justify-content-end py-2">
                        <button className="btn btn-sm mr-2">
                            <i className="fas fa-minus text-primary"></i>
                        </button>0
                        <button className="btn btn-sm ml-2">
                            <i className="fas fa-plus text-primary"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
        return menuItemCards
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card card-body bg-light mt-3">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={this.props.restaurant.restaurantImg} alt="" className="img-fluid" />
                            </div>
                            <div className="col-sm">
                                <p className="h2 text-primary mb-2">{this.props.restaurant.restaurantName}</p>
                                <hr />
                                <p className="text-dark lead mb-2">{this.props.restaurant.restaurantSpeciality}</p>
                                <footer className="blockquote-footer font-italic">{this.props.restaurant.restaurantAddress}</footer>
                            </div>
                        </div>
                    </div>
                    <div className="container col-6">
                        <h4 className="text-left text-dark mt-4 mb-2">Choose your favourite food from our menu !</h4>
                        <hr />
                        {this.mapMenuItems()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}



const mapStateToProps = state => ({
    restaurant: state.reducer.restaurant,
    menuItems: state.reducer.menuItems
});



export default connect(mapStateToProps, { fetchRestaurantById, fetchMenuItemsById })(RestaurantItems);