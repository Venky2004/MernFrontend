import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import ForestIcon from '@mui/icons-material/Forest';
import './NavBar.css'
import { Link } from 'react-router-dom';



function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function NavBar(props) {
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar className='nav'>
                        <Toolbar>
                            <Button variant="text" startIcon={<ForestIcon style={{ color: 'white' }} />} left >
                                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Green Revolution</Link>
                            </Button>
                            <ButtonGroup className='right'>
                                <Button variant="text"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
                                &nbsp;
                                <Button variant="text" ><Link to='/weather' style={{ textDecoration: 'none', color: 'white' }} >Weather</Link></Button>
                                &nbsp;
                                <Button variant="text"><Link to='/AboutUs' style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></Button>
                                &nbsp;
                                <Button variant="text"><Link to='/Services' style={{ textDecoration: 'none', color: 'white' }}>Services</Link></Button>
                                &nbsp;
                                <Button variant="text"><Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Button>
                                &nbsp;
                                &nbsp;
                                <Button variant="contained" ><Link to='/register' style={{ textDecoration: 'none', color: 'white' }} >Sign Up</Link></Button>
                                &nbsp;
                            </ButtonGroup>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar />
            </React.Fragment>
        </div>
    );
}
