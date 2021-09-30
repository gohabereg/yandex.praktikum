import {withRouter} from '../../utils/Router';
import {connect} from '../../store/index';
import {HomePage} from './home';

export { HomePage } from './home';


export default withRouter(connect(state => ({
  user: state.user.profile
}), HomePage));
