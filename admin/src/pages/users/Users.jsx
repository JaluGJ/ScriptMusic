import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import List from '../../components/tableproducts/List';
import './Users.scss';
import { getAllUsers } from '../../redux/actions';
import columns from './inputs'

function Users({ logout }) {
  const dispatch = useDispatch()
  const rows = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getAllUsers());
  }, [])
  return (
    <div className="users">
      <SideBar />
      <div className="container">
        <List
          tipo='Usuario'
          title='Usuarios existentes'
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  )
}

export default Users