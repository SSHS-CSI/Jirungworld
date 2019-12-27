const React = require("react");

const {makeStyles} = require("@material-ui/core/styles");

const AppBar = require("@material-ui/core/AppBar").default;
const Toolbar = require("@material-ui/core/Toolbar").default;
const IconButton = require("@material-ui/core/IconButton").default;
const MenuIcon = require("@material-ui/icons/Menu").default;
const AccountIcon = require("@material-ui/icons/AccountCircle").default;
const Typography = require("@material-ui/core/Typography").default;


const useStyles = makeStyles(theme => ({
                               menu : {marginRight : theme.spacing()},
                               mainBarTitle : {flexGrow : 1}
                             }));

module.exports = ({onMenuClick, toggleLoginDialog,...props}) => {
  const classes = useStyles();

  return (
      <AppBar{...props}>
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.menu} onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.mainBarTitle}>Jirung World</Typography>
          <IconButton edge="end" color="inherit" className={classes.menu} onClick={toggleLoginDialog}>
          <AccountIcon />
          </IconButton>
        </Toolbar>
      </AppBar>);
};
