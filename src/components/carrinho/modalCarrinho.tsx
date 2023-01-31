import { Button, Modal } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carrinho from "./carrinho";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 600,
      height: 450,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[1],
      padding: theme.spacing(2, 4, 3),
      overflow:'scroll',
    },
  })
);

const ModalCarrinho = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose} />
      </Box>
      <Carrinho/>
    </div>
  );

  return (
    <>
      <div>
        <Button variant="outlined" className="btnModal" onClick={handleOpen}>
        <ShoppingCartIcon style={{color: 'black', }}/>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </>
  );
};

export default ModalCarrinho;
