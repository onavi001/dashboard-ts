import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import LayersIcon from '@mui/icons-material/Layers';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { ReactNode, useEffect, useState } from 'react';
import './LeftDrawer.css'
import { Link, To } from 'react-router-dom';
type LeftDrawerProps = {
    open: boolean,
    setOpen: Function
}
interface ListElementsProps {
    id:Number,
    text: String,
    page: To,
    icon: ReactNode,
    expandable?: boolean,
    open?:boolean,
    childsItems?:ListElementsProps[]
}
export default function LeftDrawer({open,setOpen}:LeftDrawerProps) {

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };
  const [openCustomers, setOpenCustomers] = useState(true);

  const [listElements,setListELements]  = useState<ListElementsProps[]>([])

  useEffect(() => {
    setListELements([
        {
            id:0,
            text:'Dashboard',
            page:'Dashboard',
            icon:<DashboardIcon/>
        },{
            id:1,
            text:'Orders',
            page:'Orders',
            icon:<ShoppingCartIcon/>
        },{
            id:2,
            text:'Customers',
            page:'Customers',
            icon:<PeopleIcon/>,
            expandable:true,
            open:false,
            childsItems:[
              {
                id:0,
                text:'Create',
                page:'CreateCustomers',
                icon:<PersonAddAltIcon/>
              }
            ]
        },{
            id:3,
            text:'Reports',
            page:'Reports',
            icon:<EqualizerIcon/>
        },{
            id:4,
            text:'Integrations',
            page:'Integrations',
            icon:<LayersIcon/>
        },
    ])
  }, [])
  const handleExpandableOpen = (item:ListElementsProps) => {
    if(item.expandable){
        setListELements(
          listElements.map(listElement => {
            if(listElement.id === item.id)
              listElement.open = !listElement.open;
            return listElement;
          })
        )
      }
  }
  const list = () => (
    <Box
      sx={{ width: 250 }}
      
      //onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listElements.map((item,index) => (
          <Link className='ItemLink' to={item.page} key={index}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => handleExpandableOpen(item) }
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              {
                item.expandable ?
                  item.open ? <ExpandLess /> : <ExpandMore />
                :
                null
              }
            </ListItemButton>
            {
              <Collapse in={item.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {
                      item.childsItems ?
                        item.childsItems.map((itemChild,index) => (
                          <Link className='ItemLink' to={itemChild.page} key={index}>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                {itemChild.icon}
                              </ListItemIcon>
                              <ListItemText primary={itemChild.text} />
                            </ListItemButton>
                          </Link>
                        ))
                      :
                        null
                  }
                </List>
              </Collapse>
            }
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <Drawer
            className='marginDrawer'
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            hideBackdrop={true}
        >
            {list()}
        </Drawer>
    </div>
  );
}
