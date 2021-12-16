import { connect } from 'react-redux';
import Drinks from '../components/Drinks';
import { getProducts } from '../ducks/products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(Drinks);
