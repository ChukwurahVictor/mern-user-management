import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteUser, fetchUsers } from '../redux/users';
 

const UserList = ({ 
  handleOpen, setFirstname, setLastname, setEmail, setGender, setPhone, setId
}) => {
  const dispatch = useDispatch();

  const {users} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  const handleUpdate = (_id) => {
    const user = users.filter(user => user._id === _id);
    
    setFirstname(user[0].firstname);
    setLastname(user[0].lastname);
    setEmail(user[0].email);
    setGender(user[0].gender);
    setPhone(user[0].phone);
    setId(user[0]._id);
  }

  const handleDelete = (_id) => {
    dispatch(deleteUser(_id));
    dispatch(fetchUsers());
  }

  return(
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i) => {
            return (
              <tr key={i._id}>
                <td>{i.firstname}</td>
                <td>{i.lastname}</td>
                <td>{i.email}</td>
                <td>{i.gender}</td>
                <td>{i.phone}</td>
                <td>
                    <IconButton edge="end" aria-label="edit" onClick={() => { handleOpen(); handleUpdate(i._id)}}>
                      <EditIcon />
                    </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(i._id)}>
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default UserList;