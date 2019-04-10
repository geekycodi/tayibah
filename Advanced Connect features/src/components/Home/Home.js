import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../action/cartActions";
import { Card, Button } from "react-bootstrap";

class Home extends Component {
    handleClick = id => {
        this.props.addToCart(id);
    };

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <Card className={" ml-3 mb-3 text-center"} key={item.id}>
                <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
            <Card.Title className={"font-weight-bold"}>{item.name}</Card.Title>
                <h5>MRP: {item.price}</h5>
            {item.quantity === 0 ? (
                <p>Out of stock: ({item.quantity}) </p>
            ) : (
            <p>In Stock: ({item.quantity})</p>
            )}
        </Card.Body>
            <Card.Footer>
            {item.quantity === 0 ? (
                    <Button
                    variant="info"
                disabled
                    onClick={() => this.handleClick(item.id)}
        >Add to cart
            </Button>
        ) : (
            <Button variant="info" onClick={() => this.handleClick(item.id)}>
            Add to cart
            </Button>
        )}
        </Card.Footer>
            </Card>
        );
        });

        return <div className={"box mt-5"}>{itemList}</div>;
    }
}
const mapStateToProps = state => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => {
            dispatch(addToCart(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);