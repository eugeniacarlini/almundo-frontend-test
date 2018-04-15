import { connect } from 'react-redux';
import * as hotelActions from '../actions/hotelActions';
import Qcat from '../components/Qcat';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedHotelState: state.hotelState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotels: (name, stars) => dispatch(hotelActions.fetchHotels(name, stars))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Qcat);