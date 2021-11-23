import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },

  Button: {
    fontSize: '10px',
    fontWeight: '500',
    texttransform: 'lowercase',
  },

}));

export default function PopperPopupState() {
  const classes = useStyles();

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button className={classes.Button}  {...bindToggle(popupState)}>
            Help
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography className={classes.typography}><h5>Help</h5></Typography>
                  <ul >

                    <Button className={classes.btn} >Order Status</Button><br />
                    <Button className={classes.btn}>Shipping & Delivery</Button><br />
                    <Button className={classes.btn}> Retruns</Button><br />
                    <Button className={classes.btn}>Size Chats</Button><br />
                    <Button className={classes.btn}>Contact Us</Button><br />
                    <Button className={classes.btn}>Privacy Policy</Button><br />
                    <Button className={classes.btn}>Term of Sale</Button><br />
                    <Button className={classes.btn}>Term of Use</Button><br />
                    <Button className={classes.btn}>Send us Feedback</Button>
                  </ul>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
