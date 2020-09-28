import React from "react";

import { connect } from "react-redux";
import { fetchProductsAction , type2 } from "../../redux/services/fetchProducts";
import { bindActionCreators } from 'redux';

class ProductList extends React.Component {
  
  componentDidMount() {
      console.log(this.props);
    const { dispatch } = this.props
    //  dispatch(fetchProductsAction())
    this.props.fetchProducts();
      
  
  }

  render() {
   // console.log('product list in product component',this.props.users)
   if(this.props.users)
   {
    const items = this.props.users.map((item) =>
    <option key={item.id} value={item.id}>{item.name}</option>
 );
   }
    
      return(
        <div> <h2>total Producs</h2>
        
                   {/*   <select>{items}</select> */}

         

          <div>
          <button onClick={this.props.type2}>+</button>

         { console.log(this.props.type2data) }
         </div>
        </div>
      )
  }
}



function mapStateToProps(state){
    // console.log('1');
     return{
        users: state.users,
        loading: state.loading,
        error: state.error,
        success : state.success,
        type2data : state.type2data

     }
   }
/* function mapDispatchToProps(dispatch) {
// console.log('2');
    return {
        fetchProducts: fetchProductsAction
    };
}
 */
 const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction,
    type2 : type2
  }, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps )(ProductList);