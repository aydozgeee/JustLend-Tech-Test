import React from 'react';
import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Complaints from '../components/Complaints';
import Campaigns from '../components/Campaigns';
import Settings from '../components/Settings';
import Reports from '../components/Reports';
import Users from '../components/Users';
import Dashboard from '../components/Dashboard';

const drawerWidth = 240;
const headerHeight = 46;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#404040'
    },
    drawerPaper: {
        top: "inherit",
        width: '240px',
        color: '#CECECE',
        backgroundColor: "#fafafa"
    },
}));

export default function NavBar(props) {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(2);
    const [iconColor, setIconColor] = useState(null);

    useEffect(() => {
        if (isShown != 0) {
            props.setSelectedValue(isShown);
        }

    }, [isShown])

    function setIsClickOrNot(setIsShownValue) {
        setIsShown(setIsShownValue);
    }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Divider />
                <List style={{ marginTop: "26%" }}>
                    <ListItem button component="a" href="#Dashboard" onClick={() => setIsShown(1)}
                    >
                        <DashboardIcon style={{ fontSize: "30px", color: { iconColor } }} />
                        <ListItemText style={{ marginTop: "10px", marginLeft: "10px" }} primary="Dashboard"
                        ></ListItemText>
                    </ListItem>
                    <ListItem button component="a" href="#Compaigns" onClick={() => setIsShown(2)} >
                        <ListIcon style={{ fontSize: "30px" }} />
                        <ListItemText style={{ margin: "15px" }} primary="Campaigns"></ListItemText>


                    </ListItem>
                    <ListItem button component="a" href="#Users" onClick={() => setIsShown(3)} >
                        <PersonIcon style={{ fontSize: "30px" }} />
                        <ListItemText style={{ margin: "15px" }} primary="Users"></ListItemText>


                    </ListItem>
                    <ListItem button component="a" href="#Reports" onClick={() => setIsShown(4)} >
                        <AssessmentIcon style={{ fontSize: "30px" }} />
                        <ListItemText style={{ margin: "15px" }} primary="Reports"></ListItemText>


                    </ListItem>

                    <ListItem button component="a" href="#Complaints" onClick={() => setIsShown(5)} >
                        <QuestionAnswerIcon style={{ fontSize: "30px" }} />
                        <ListItemText style={{ margin: "15px" }} primary="Complaints"></ListItemText>


                    </ListItem>

                    <ListItem button component="a" href="#Settings" onClick={() => setIsShown(6)} >
                        <SettingsIcon style={{ fontSize: "30px" }} />
                        <ListItemText style={{ margin: "15px" }} primary="Settings"></ListItemText>


                    </ListItem>




                </List>
            </Drawer>
        </div>
    );
}
