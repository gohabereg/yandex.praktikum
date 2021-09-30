import { ProfilePage } from './profile';
import {withRouter} from '../../utils/Router';
import {connect} from '../../store/index';

export default withRouter(connect((state: any) => ({
  user: state.user.profile
}), ProfilePage));
