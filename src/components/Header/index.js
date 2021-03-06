import {AppBar, Toolbar, IconButton,  Typography, Button} from '@material-ui/core';
// import {MenuIcon} from '@material-ui/icons'

const Header = () => {
   return (
      <AppBar position="static">
         <Toolbar>
            <IconButton
               edge="start"
               className={''}
               color="inherit"
               aria-label="menu"
            >
               {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6">
               News
            </Typography>
            <Button color="inherit">Login</Button>
         </Toolbar>
      </AppBar>
   );
};
export default Header;