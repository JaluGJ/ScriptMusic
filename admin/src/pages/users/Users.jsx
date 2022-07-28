import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import List from '../../components/tableusers/listUsers';
import './Users.scss';
import { banUser, getAllUsers, unBanUser,deleteUser, clearCache } from '../../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function Users() {
  const dispatch = useDispatch()
  const rows = useSelector(state => state.users)
  const userToken = localStorage.user;
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
    dispatch(getAllUsers(userToken));
  }, [isLoading])

  //--------------------------------------------------------------------------------------------------------------------------------
  function handleDeleteUser(e, id) {
    e.preventDefault(e);
    dispatch(deleteUser(id, userToken))
    setTimeout(() => {
      setIsLoading(true)
    }, 500);
    toast.success('Usuario Eliminado', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleBanUser(e, id){
    e.preventDefault();
    dispatch(banUser(id, userToken));
    setTimeout(() => {
      setIsLoading(true)
    }, 500);
    toast.success('Usuario Bloqueado', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleUnBanUser(e, id){
    e.preventDefault();
    dispatch(unBanUser(id, userToken));
    setTimeout(() => {
      setIsLoading(true)
    }, 500);
    toast.success('Usuario Desloqueado', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    { field: 'firstName', headerName: 'Nombre', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'lastName', headerName: 'Apellido', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'email', headerName: 'Email', width: 200, headerAlign: 'center', align: 'center' },
    
    {
      field: 'estado', headerName: 'Estado', width: 60, headerAlign: 'center', align: 'center',
      renderCell: (cellValues) => {return cellValues.row.isBan === false ? 'Activo' : 'Baneado'}
    },
    {
      field: 'isConfirmed', headerName: 'Validado', width: 80, headerAlign: 'center', align: 'center',
      renderCell: (cellValues) => {return cellValues.row.isConfirmed === true ? <DoneIcon style={{color:'green'}} /> : <CloseIcon style={{color:'red'}} />}
    },
    {
      field: 'isAdmin', headerName: 'ADMIN', width: 80, headerAlign: 'center', align: 'center',
      renderCell: (cellValues) => {return cellValues.row.isAdmin === true ? <DoneIcon style={{color:'green'}} /> : <CloseIcon style={{color:'red'}} />}
    },

    {
      field: 'banuser', headerName: 'Bloquear', width: 80, headerAlign: 'center', align: 'center',
      renderCell: (cellValues) => {return <PersonOffIcon onClick={(e) => handleBanUser(e, cellValues.row.id)} className='red' />}
    },
    {
      field: 'unbanuser', headerName: 'Desbloquear', width: 80, headerAlign: 'center', align: 'center',
      renderCell: (cellValues) => {return <PersonRoundedIcon onClick={(e) => handleUnBanUser(e, cellValues.row.id)} className='green' />}
    },
    {
      field: 'delete', headerName: '', headerAlign: 'center', align: 'center', width: 30,
      renderCell: (cellValues) => {return <DeleteIcon className='delete' onClick={(e) => handleDeleteUser(e, cellValues.row.id)} />}
    },
  ]
  //--------------------------------------------------------------------------------------------------------------------------------




  return (
    <div className="users">
      <SideBar />
      <ToastContainer />
      <div className="container"> 
        <List
          tipo='Administrador'
          title='Usuarios existentes'
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  )
}
