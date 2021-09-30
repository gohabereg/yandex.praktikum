import {withRouter} from '../../utils/Router';
import {connect} from '../../store/index';
import {SignupPage} from './signup';
export { SignupPage } from './signup';

export default withRouter(connect((state: any) => ({user: state.user || {}}), SignupPage));
