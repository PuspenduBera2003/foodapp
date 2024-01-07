import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import CakeIcon from '@mui/icons-material/Cake';
import { Link } from 'react-router-dom'

const TemporaryDrawer = (ToggleDrawer) => {
    return (
        <Box
            sx={{ width: 300, height: '100%', background: 'linear-gradient(to bottom, #ebd7fc, #875aad, #875aad)', display: 'flex', flexDirection: 'column'}}
            role="presentation"
            onClick={ToggleDrawer("left", false)}
            onKeyDown={ToggleDrawer("left", false)}
        >
            <List>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ margin: 'auto' }}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ margin: 'auto' }}>
                            <RiceBowlIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your Orders" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ChatBubbleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your Feedbacks" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <WorkspacePremiumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Buy Premium" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CrisisAlertRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Our Mission and Vision" />
                    </ListItemButton>
                </ListItem>
                <Link to="/all-about-prasadam" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CakeIcon />
                            </ListItemIcon>
                            <ListItemText primary="All About Prasadam" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactPageRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact Us" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DescriptionSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="User Data Policies" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CurrencyRupeeRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Help Aharada" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Button variant="contained" color='error' startIcon={<LogoutRoundedIcon />} style={{ margin:'auto' }}>
                Log Out
            </Button>
        </Box>
    );
};

export default TemporaryDrawer;