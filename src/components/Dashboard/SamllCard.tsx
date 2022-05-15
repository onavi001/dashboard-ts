import { createRef, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Grid, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StorefrontIcon from '@mui/icons-material/Storefront';
import './DashBoard.css';
export interface ISmallCardProps {
}

export default function SmallCard (props: ISmallCardProps) {
    
    return (
        <Card sx={{ minWidth: 100}}>
            
          <CardContent style={{alignItems:'center',padding:'10px'}}>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={1} style={{alignItems:'center'}}>
                    <Grid item xs={2} >
                        <StorefrontIcon sx={{fontSize:30}} fontSize='large' />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
                            $500.00
                        </Typography>
                        <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
                            Total
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
          </CardContent>
        </Card>
    );
}
