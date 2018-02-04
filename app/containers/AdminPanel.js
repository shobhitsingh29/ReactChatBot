import { connect } from 'react-redux';
import Admin from '../components/Admin';
import { getSocket, getAdmins ,getOnlineUsers} from '../actions';

const mapStateToProps = (state, props) => {
    return {
        user: state.user,
        socket: state.socket,
        admins: state.admins,
        onlineUsers:state.onlineUsers
    }
};

const mapDispatchToProps = dispatch => ({
    getSocket: (socket) => dispatch(getSocket(socket)),
    getAdmins: () => dispatch(getAdmins()),
    getOnlineUsers: () => dispatch(getOnlineUsers())
});

const AdminPanel = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default AdminPanel;

