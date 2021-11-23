import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Logo from '../../../Image/sh1.jpg';
import { Checkbox } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'rgb(245, 245, 245)',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '35%',

    },

    button: {
        background: 'none',
        color: 'black',
        border: 'none',
        fontSize: '10px',
        fontWeight: '500'
    },

    subPaper: {
        placeContent: 'center',
        placeItem: 'center',
        textAlign: 'center',
    },

    subCheck: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '90%',
    },

    Checkbox: {
        display: 'flex',
    },

    p: {
        fontSize: '14px',
        fontFamily: 'monospace',
        color: 'gray',
    },

    for: {
        background: 'none',
        border: 'none',
        fontSize: '12px',
        color: 'gray',
    },

    log: {
        color: 'gray',
        textAlign: 'center',
        width: '80%',
        position: 'relative',
        left: '45px',
    },
    p2: {
        textAlign: 'center',
        fontFamily: 'none',
        fontSize: '15px',
    },

    btn5: {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        width: '80%',
        padding: '10px',
        borderRadius: '5px',
        fontFamily: 'Teko',
        fontSize: '20px',
    }


}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.button} type="button" onClick={handleOpen}>
                SIGN IN
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.subPaper}>

                            <div >

                                <img style={{ width: '100px', height: '80px', }} src={Logo} alt="img" />

                                <h4 style={{ textAlign: 'center', fontFamily: 'monospace', }}>YOUR ACCOUNT FOR EVERYTHINK SHOE STORE</h4>
                            </div>

                            <br />

                            <div >
                                <input style={{ width: '80%', height: '45px', padding: '10px', border: '1px solid lightgray', }} type="text" placeholder="Email address" />

                            </div>

                            <br />

                            <div>
                                <input style={{ width: '80%', height: '45px', padding: '10px', border: '1px solid lightgray', }} type="text" placeholder="Password" />
                            </div>

                            <br />

                            <div className={classes.subCheck}>
                                <div className={classes.Checkbox}>

                                    <Checkbox defaultChecked />

                                    <p className={classes.p} >Keep me signed in</p>
                                </div>

                                <button className={classes.for}>Forget Password?</button>

                            </div>

                            <br />

                            <div className={classes.log}>
                                <p className={classes.p2}>By logging in, you agree to Shoe Store <a href='#'>Privacy Policy</a> and <a href='#'>Term of Use</a> </p>
                            </div>

                            <br />

                            <button className={classes.btn5}>SIGN IN</button>

                            <br />

                            <div className={classes.log}>
                                <p className={classes.p2}>Not a number?<a href='#'>Join Us</a>  </p>
                            </div>

                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
