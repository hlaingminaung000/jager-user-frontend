import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Radio from '@mui/material/Radio';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Input } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FilterLeague({ hanldeFilterLeaguesClose, open }) {
    const [filterListItem, setFilterListItem] = useState([]);
    const [demoData, setDemoData] = useState([]);
    const handleListItemClick = (leagueId) => {
        let copyArr;
        copyArr = [...filterListItem];
        (copyArr.includes(leagueId)) ? copyArr = copyArr.filter(v => v != leagueId) : copyArr.push(leagueId)
        setFilterListItem(copyArr)
    }
    const handleSearch = (e) =>{
        const filteredData = data.filter(v => v.leagueName.toLowerCase().includes(e.currentTarget.value));
        setDemoData(filteredData)
    }
    useEffect(()=>{
        setDemoData(data)
    },[])
    const data = [
        {
            leagueId: 1,
            leagueName: "Premiere league"
        },
        {
            leagueId: 2,
            leagueName: "Laliga"
        },
        {
            leagueId: 3,
            leagueName: "PSG"
        }
    ]

    return (
        <div>
            <Dialog
                fullWidth
                maxWidth="xs"
                PaperProps={{
                    style: {
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        backgroundColor: "#010625"
                    },
                }}
                open={open}
                onClose={hanldeFilterLeaguesClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative'}} className="header-filter-league">
                    <Toolbar sx={{ justifyContent: "space-between", backgroundColor: "#021928" }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={hanldeFilterLeaguesClose}
                            aria-label="close"
                            sx={{ '&:hover': { backgroundColor: '#87CEEB' } }}
                        >
                            <CloseIcon fontSize='large' />
                        </IconButton>
                        <Input placeholder="Search..." className='search-league' size='large' onChange={handleSearch}/>
                        <Button autoFocus color="inherit" onClick={hanldeFilterLeaguesClose}
                            sx={{ fontSize: "1.3rem", '&:hover': { backgroundColor: '#87CEEB' } }}>
                            Filter
                        </Button>
                    </Toolbar>
                </AppBar>
                <List >
                    {demoData.map(v => {
                        return (
                            <ListItem button sx={{ color: "white" }} onClick={() => handleListItemClick(v.leagueId)} key={v.leagueId}>
                                <ListItemAvatar >
                                    <Avatar alt="Logo" src={require("../../../assets/leagues/laliga.jpg")} />
                                </ListItemAvatar>
                                <ListItemText primary={v.leagueName}
                                    primaryTypographyProps={{ style: { color: 'white', fontSize: "1.5rem" } }}
                                />
                        
                                    <Radio
                                        size='medium'
                                        sx={{ color: "white" }}
                                        onClick={() => handleListItemClick(v.leagueId)}
                                        edge="end"
                                        icon={<RadioButtonUncheckedIcon sx={{ width: 24, height: 24 }} />}
                                        checkedIcon={<RadioButtonCheckedIcon sx={{ width: 24, height: 24, color: "#87CEEB" }} />}
                                        checked={filterListItem.includes(v.leagueId)}

                                    // onChange={onSelect}
                                    />

                            </ListItem>
                        )
                    })}

                </List>
            </Dialog>
        </div>
    );
}