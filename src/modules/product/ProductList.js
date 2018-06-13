
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { completeDisplay } from "./productUtility";

import React, { Component } from 'react';
import { connect } from "react-redux";
import { basketHandler } from "../../store/basket/handlers";
import { Link } from 'react-router-dom';
import {formatAmount} from "./../../util.js";


//import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },

});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 */



class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "products": []
    }
  }


  componentDidMount() {
    //console.log("products", this.props.match);
      fetch(`https://decath-product-api.herokuapp.com${this.props.match.url}`)
        .catch((error) => {
          console.warn(error);
        })
        .then((response) => response.json())
        .then((resp) => {
          this.setState({"products": resp})
          //console.log(resp);
        })
  }

  handlerAddProductToBasket = (id) => {
    this.props.addProductToBasket(id);
  }

render() {
    const { classes } = this.props;
    //console.log("Classes :", classes);
  return (
    <div className={classes.root}>
      <GridList cellHeight={260} cols={3} className={classes.gridList}>

        {this.state.products.map(product => (
          <GridListTile key={product.id}>
            <img src={completeDisplay(product)} alt={product.title} />
            <GridListTileBar
              title={<Link to={`/products/${product.id}`} style={{color: "white", fontSize: 14}}>{product.title}</Link>}
              subtitle={<span style={{fontSize: 14, fontWeight: 'bold'}}>{formatAmount(product.min_price)}</span>}
              actionIcon={
                <IconButton className={classes.icon} onClick={() => this.handlerAddProductToBasket(product.id)}>
                  <i className="material-icons" >add_shopping_cart</i>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(ProductList);
export default withStyles(styles)(connect(null, basketHandler)(ProductList));
// const Connected = connect(null, basketHandler)(ProductList);
// export default Connected;
