import {LoginPage} from './login';
import {connect} from '../../store/index';
import {withRouter} from '../../utils/Router';

export default withRouter(connect((state: any) => ({user: state.user || {}}), LoginPage));
