import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import List from '../../components/tableusers/listUsers';
import './Users.scss';
import { banUser, getAllUsers } from '../../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { deleteUser } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

function Users() {

  const dispatch = useDispatch()
  const rows = useSelector(state => state.users)
  const userToken = localStorage.user;

  //--------------------------------------------------------------------------------------------------------------------------------
  function handleDeleteUser(e, id) {
    e.preventDefault();
    dispatch(deleteUser(id, userToken))
    toast.success('Usuario Eliminado', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(getAllUsers());
  }

  function handleBanUser(e, id){
    e.preventDefault();
    dispatch(banUser(id));
    toast.success('Usuario Bloqueado', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(getAllUsers());
  }
  // PARA IMPLEMENTAR EL DELETEUSER SE TRAJO EL INPUTS Y SE ELIMINO,
  // PORQUE NO ESTABA RECIBIENDO EL DISPATH PARA REALIZAR LA ACCION.
  let columns = [
    {
      field: '',
      headerName: '',
      headerAlign: 'center',
      align: 'center',
      width: 50,
      renderCell: (cellValues) => {
        return <Link style={{ textDecoration: "none", color: 'black' }} to={`/users/${cellValues.row.id}`}> <ModeEditIcon /> </Link>
      },
    },
    { field: 'firstName', headerName: 'Nombre', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'lastName', headerName: 'Apellido', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'email', headerName: 'Email', width: 300, headerAlign: 'center', align: 'center' },
    {
      field: 'isConfirmed', headerName: 'Validado', width: 100, headerAlign: 'center', align: 'center'
    },
    {
      field: 'delete',
      headerName: '',
      headerAlign: 'center',
      align: 'center',
      width: 30,
      renderCell: (cellValues) => {
        return <DeleteIcon onClick={(e) => handleDeleteUser(e, cellValues.row.id)} />
      },
    },
    {
      field: 'banuser', headerName: 'Bloquear', width: 100, headerAlign: 'center', align: 'center',
      renderCell: (cellValues) => {return <PersonOffIcon onClick={(e) => handleBanUser(e, cellValues.row.id)} className='red'  />}
    },
    {
      field: 'unbanuser', headerName: 'Desbloquear', width: 100, headerAlign: 'center', align: 'center',
      renderCell: (cellValues) => {return <PersonRoundedIcon className='green'  />}
    },
  ]
  //--------------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getAllUsers(userToken));
  }, [])
  return (
    <div className="users">
      <SideBar />
      <ToastContainer />
      <div className="container">
        {console.log(userToken)}
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