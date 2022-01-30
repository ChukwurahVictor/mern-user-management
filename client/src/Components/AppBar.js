import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   title: {
      flexGrow: 1,
      textAlign: 'center'
   }
}));
   
const NavBar = () => {
   const classes = useStyles();
   return (
      <div>   
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" className={classes.title}>
                  User Management System
               </Typography>
            </Toolbar>
         </AppBar>
     </div>
   )
}
export default NavBar;


