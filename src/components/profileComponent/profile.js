
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { languageContext } from '../../context'
import Footer from '../footer'
import Header from '../header'
import { Avatar, Box, ButtonBase, ListItem, ListItemAvatar, ListItemText, Radio } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function Profile() {
  const {changeLang} = useContext(languageContext);
  const [openChangeLangModal, setOpenChangeLangModal] = useState(false);
  const handleChangeLangClick = () => {
    setOpenChangeLangModal(true);
  };

  const handleChangeLangClose = () => {
    setOpenChangeLangModal(false);
  };
  return (
    <div >
      <Header/>
        <div style={{padding: "2rem 1.5rem"}}>
           <div style={{display: "flex",padding: "2.5rem 1.5rem",backgroundColor: "#0A324D",borderRadius: "1.3rem",marginBottom: "4rem"}}>
             <div style={{borderRadius: "10rem",backgroundColor: "#005853",width: "6.5rem",height: "6.5rem",display: "flex",justifyContent: "center",alignItems: "center"}}>
              <h1 style={{fontSize: "2.5rem",fontWeight:"bolder"}}>L</h1>
             </div>
             <div style={{display: "flex",flexDirection: "column",justifyContent: "center",marginLeft: "1.5rem"}}>
               <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">Lin Gash</h1>
               <h1 style={{margin: 0,fontSize: "2.1rem"}} className="white">5000.00 MMK</h1>
             </div>
           </div>
           <div style={{backgroundColor: "#0A324D",padding: "2rem 0",display: "flex",justifyContent: "center",alignItems: "center",borderRadius: "1.3rem",marginBottom: "3rem"}}>
              <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">Rules</h1>
           </div>
             {/* <div style={{backgroundColor: "#0A324D",padding: "2rem 0",display: "flex",justifyContent: "center",alignItems: "center",borderRadius: "1.3rem",marginBottom: "3rem"}} onClick={handleChangeLangClick}> */}
        
             <ButtonBase component="div" style={{backgroundColor: "#0A324D",padding: "2rem 0",display: "flex",borderRadius: "1.3rem",marginBottom: "3rem"}} onClick={handleChangeLangClick}>
                      <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">Change Language</h1>
             </ButtonBase>
     
             {/* </div> */}
           {openChangeLangModal ? <ChangeLangModal handleChangeLangClose={handleChangeLangClose} openChangeLangModal={openChangeLangModal}/> : ""}
           <div style={{backgroundColor: "#0A324D",padding: "2rem 0",display: "flex",justifyContent: "center",alignItems: "center",borderRadius: "1.3rem",marginBottom: "3rem"}}>
              <h1 style={{margin: 0,fontSize: "1.9rem"}} className="white">Change Password</h1>
           </div>
        </div>
      <Footer/> 
    </div>
  )
}

const ChangeLangModal = ({openChangeLangModal,handleChangeLangClose}) =>{
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const {changeLang,lang} = useContext(languageContext);
  const handleListItemClick = (lang) =>{
    changeLang(lang)
    handleChangeLangClose()
  }

  return (
    <Dialog
    open={openChangeLangModal}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleChangeLangClose}
    aria-describedby="alert-dialog-slide-description"
    PaperProps={{style: {backgroundColor: "#010625",width: "70%"}}}
  >
    <DialogTitle style={{color: "white",fontSize: "15px"}}>{"Change Language?"}</DialogTitle>
    <DialogContent sx={{paddingLeft: 0,paddingRight: 0}}>
      <ListItem button sx={{ color: "white" }} onClick={() => handleListItemClick("my")}>
        <ListItemAvatar style={{padding: "0 10px 0 0",margin: 0,width: "auto"}} >
            <Avatar style={{width: "20px",height: "20px"}} alt="Logo" src={require("../../assets/flags/my.jpg")} variant="rounded" />
        </ListItemAvatar>
        <ListItemText primary="Myanmar"
            primaryTypographyProps={{ style: { color: 'white', fontSize: "1.5rem" } }}
        />
        <Radio
            size='medium'
            sx={{ color: "white" }}
            onClick={() => handleListItemClick("my")}
            edge="end"
            icon={<RadioButtonUncheckedIcon sx={{ width: 24, height: 24 }} />}
            checkedIcon={<RadioButtonCheckedIcon sx={{ width: 24, height: 24, color: "#87CEEB" }} />}
            checked={(lang == "my")? true : false}
        />
       </ListItem>
       <ListItem button sx={{ color: "white" }} onClick={() => handleListItemClick("en")}>
        <ListItemAvatar style={{padding: "0 10px 0 0",margin: 0,width: "auto"}} >
            <Avatar style={{width: "20px",height: "20px"}} alt="Logo" src={require("../../assets/flags/eng.jpg")} variant="rounded" />
        </ListItemAvatar>
        <ListItemText primary="English"
            primaryTypographyProps={{ style: { color: 'white', fontSize: "1.5rem" } }}
        />
        <Radio
            size='medium'
            sx={{ color: "white" }}
            onClick={() => handleListItemClick("en")}
            edge="end"
            icon={<RadioButtonUncheckedIcon sx={{ width: 20, height: 20 }} />}
            checkedIcon={<RadioButtonCheckedIcon sx={{ width: 20, height: 20, color: "#87CEEB" }} />}
            checked={(lang == "en")? true : false}
        />
       </ListItem>
    </DialogContent>

  </Dialog>
  )
}