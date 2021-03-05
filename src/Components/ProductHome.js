import React from 'react'
import Button from '@material-ui/core/Button';
import '../Components/Styles/PoductHome.css'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Sider from '../Components/DropDowns/MainDropdown'
import CategoryDropDown from './categoryDropDown/categoryDropDown'
import Product from './Product'
import Chips from '../Utills/Chips'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
    
  }));
const ProductHome = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="product-home">
                <div className="ph-box">
                    <div className="ph-breadcrumb pt-2 ps-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="ps-4 ph-text">
                        <h3>Women</h3>
                    </div>
                    <hr />
                    <div className="ct-drpdwn">
                        <CategoryDropDown />
                    </div>
                </div>
                <div className="ph-item-1">
                    <Chips />
                    <Button color="primary">Clear filter</Button>
                </div>
                <div className="ms-2 mt-2 ph-item-2">
                    <Link>Cothes</Link>
                    <Link>Cothes</Link>
                    <Link>Cothes</Link>
                    <Link>Cothes</Link>
                    <Link>Cothes</Link>
                </div>
                <div className="ph-item-3">
                    <span>500+ results</span>

                    <div className="dropdown">
                        <button className="sort-btn btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                </div>

                <div className="product-sec">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className={classes.root}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </div>

            </div>

        </React.Fragment>
    )
}

export default ProductHome
