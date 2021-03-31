
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Define from '../Dashboard/Define'
import { Modal} from "react-bootstrap";
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();
    const [webdisplaymodel,showwebdisplaymodel]=useState(false);

    return (
        <>
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '5%' }}>

                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
        </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                        <Button onClick={()=>{
                            showwebdisplaymodel(true);
                        }}>
                            Sign in
     </Button>


                </div>
            </Paper>

        </Container>
           <Modal style={{ zIndex: '10000000' }}
           show={webdisplaymodel}
           centered
           size="xl"
           onHide={() => { showwebdisplaymodel(false) }}
       >
           <Modal.Header style={{ backgroundColor: "#50A3B9", color: "white" }}>

               <Modal.Title style={{ textAlign: 'center' }}>
                   Define
               </Modal.Title>
           </Modal.Header>
           <Modal.Body>
               <div>
               <Define />

               </div>

           </Modal.Body>
           <Modal.Footer>
               <Button variant="secondary" onClick={() => { showwebdisplaymodel(false) }}>
                   Close
      </Button>
           </Modal.Footer>
       </Modal>

        </>
    );
}

