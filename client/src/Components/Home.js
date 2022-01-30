import { useState } from 'react';
import Search from "./Search";
import UserList from "./UserList";
import { Button } from "@material-ui/core";
import UserForm from './UserForm';

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
      setOpen(false)
      setId("");
      setFirstname("");
      setLastname("");
      setEmail("");
      setGender("");
      setPhone("");
   };
//   const [user, setUser] = useState({});

   const [id, setId] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [gender, setGender] = useState("");
   const [phone, setPhone] = useState("");

   return (
      <div className="home">
         <UserForm 
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
            firstname={firstname}
            lastname={lastname}
            email={email}
            gender={gender}
            setGender={setGender}
            phone={phone}
            id={id}
            // user={user}
            // initialValues={initialValues}
         />
         <div className='add-user-button'>
         <Button variant="outlined" onClick={handleOpen}>
            Add User
         </Button>
      </div>
         <Search />
         <UserList 
            handleOpen={handleOpen}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setEmail={setEmail}
            setGender={setGender}
            setPhone={setPhone}
            setId={setId}
            // setUser={setUser} 
            />
      </div>
   )
}

export default Home;