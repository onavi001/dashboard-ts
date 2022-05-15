import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { DataYear } from './SampleData'
type Props = {}

export default function ListData({}: Props) {
    const data = new DataYear();
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    console.log(data.filter((dat,index)=>index < 5))
    return (
        <List
            sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            }}
            component="nav" aria-label="mailbox folders"
        >
            {
                data.map((dat,index) => (
                    index < 5 ?
                    <span key={`${dat.time}`}>
                        <ListItem>
                            <ListItemText primary={dat.time} secondary={dollarUS.format( dat.investment < 70 ? -1*dat.investment:dat.investment)} />
                            <ListItemAvatar>
                                {
                                    dat.investment < 70 ?
                                    <Avatar sx={{ width: 24, height: 24, borderRadius: "25%", backgroundColor: 'rgb(251, 233, 231);' }} variant='square' >
                                        <KeyboardArrowDownIcon sx={{ color: 'rgb(216, 67, 21);' }} />
                                    </Avatar>
                                    :
                                    <Avatar sx={{ width: 24, height: 24, borderRadius: "25%", backgroundColor: 'rgb(185, 246, 202);' }} variant='square' >
                                        <KeyboardArrowUp sx={{ color: 'rgb(0, 200, 83);' }} />
                                    </Avatar>

                                }
                            </ListItemAvatar>
                        </ListItem>
                        <Divider component="li" />
                    </span>
                    :
                    null
                ))
            }
            
        </List>
  )
}