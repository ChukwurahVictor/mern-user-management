import { useDispatch } from 'react-redux';
import { Button, Box, TextField } from "@material-ui/core";
import{ Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from "@mui/material/FormControl";
import { addUser, updateUser, fetchUsers } from '../redux/users';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserForm = (
  { open, handleOpen, handleClose, user, firstname, lastname, email, gender, phone, id, setGender }
  ) => {
    const dispatch = useDispatch();

    const initialValues = {
      id,
      firstname,
      lastname,
      email,
      gender,
      phone
    } 
  // console.log(initialValues);

  // const handleChange = (e) => {
  //   setGender(e.target.value);
  // }

  const handleSubmit = (values) => {
    if(firstname === "") {
      console.log("add", values);
      dispatch(addUser(values));
    } else {
      console.log("update", values);
      dispatch(updateUser(values));
    }

    dispatch(fetchUsers());
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, formikHelpers) => {
                handleSubmit(values);
                handleClose();              
            }}
            validationSchema={object({
              firstname: string().required('Please enter firstname').min(2, "Name too short"),
              lastname: string().required('Please enter lastname').min(2, "Name too short"),
              email: string().required('Please enter enter').email("Invalid email"),
              gender: string().required('Please enter gender'),
              phone: string().required('Please enter phone')
            })}
          >
          {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name="firstname"
              type="firstname"
              as={TextField}
              variant="outlined"
              color="primary"
              label="firstname"
              fullWidth
              error={Boolean(errors.firstname) && Boolean(touched.firstname)}
              helperText={Boolean(touched.firstname) && errors.firstname}
            />
            <Box height={15}/>
            <Field 
              name="lastname"
              type="lastname"
              as={TextField}
              variant="outlined"
              color="primary"
              label="lastname"
              fullWidth
              error={Boolean(errors.lastname) && Boolean(touched.lastname)}
              helperText={Boolean(touched.lastname) && errors.lastname}
            />
            <Box height={15}/>
            <Field 
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="email"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={15}/>
            {/* <Field 
              name="gender"
              type="gender"
              as={TextField}
              variant="outlined"
              color="primary"
              label="gender"
              fullWidth
              error={Boolean(errors.gender) && Boolean(touched.gender)}
              helperText={Boolean(touched.gender) && errors.gender}
            /> */}
            {/* <FormControl fullWidth>
              <InputLabel id="gender-label">gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                type="gender"
                fullWidth
                value={gender}
                label="gender"
                onChange={handleChange}
                error={Boolean(errors.gender) && Boolean(touched.gender)}
                // onChange={(e) => setGender(e.target.value)}
                // helpertext={Boolean(touched.gender) && errors.gender}
              >
                <MenuItem value={'male'}>male</MenuItem>
                <MenuItem value={'female'}>female</MenuItem>
              </Select>
            </FormControl> */}
            <FormControl style={{width: '100%'}}>
              <InputLabel id="gender-label">
                gender
              </InputLabel>
              <Field
                  name="gender"
                  type="gender"
                  labelId="gender-label"
                  label="gender"
                  as={Select}
                >
                  <MenuItem value={'male'}>male</MenuItem>
                  <MenuItem value={'female'}>female</MenuItem>
              </Field>
            </FormControl>
            <Box height={15}/>
            <Field 
              name="phone"
              type="phone"
              as={TextField}
              variant="outlined"
              color="primary"
              label="phone"
              fullWidth
              error={Boolean(errors.phone) && Boolean(touched.phone)}
              helperText={Boolean(touched.phone) && errors.phone}
            />
            <Box height={15}/>
            {id === "" ? 
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Add User
            </Button> 
            :
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Update User
            </Button>
            }
          </Form>
          )}
          </Formik>
        </Box>
      </Modal>
    </div>
  )
}

export default UserForm;