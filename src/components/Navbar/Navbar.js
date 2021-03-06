import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  List,
  Link,
  ListItem,
  Badge,
  IconButton,
  Container,
} from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import { Stack } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#fff',
    height: 100,
  },
  toolbar: {
    height: '100%',
  },
  logo: {
    color: '#068201',
    fontSize: '50px',
    fontWeight: '500',
    flexGrow: '2',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      flexGrow: '1',
    },
  },
  list: {
    display: 'flex',
    flexGrow: '2',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: '#222',
  },
  link: {
    fontSize: '20px',
    color: '#222',
  },
  stacked: {
    flexGrow: '1',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  bars: {
    color: '#222',
    width: '2em',
  },
  iconButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))
const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography color='secondary' className={classes.logo}>
          Zay
        </Typography>
        <List className={classes.list}>
          <ListItem>
            <Link href='#' className={classes.link}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#' className={classes.link}>
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#' className={classes.link}>
              Shop
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#' className={classes.link}>
              Contact
            </Link>
          </ListItem>
        </List>
        <div className={classes.stacked}>
          <Stack spacing={4} direction='row'>
            <Badge color='primary'>
              <SearchIcon className={classes.icon} />
            </Badge>
            <Badge color='primary' badgeContent={5}>
              <AddShoppingCartIcon className={classes.icon} />
            </Badge>
            <Badge color='primary' badgeContent={11} max={99}>
              <PersonIcon className={classes.icon} />
            </Badge>
          </Stack>
        </div>
        <IconButton size='medium' className={classes.iconButton}>
          <MenuIcon className={classes.bars} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
