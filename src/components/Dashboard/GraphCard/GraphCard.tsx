import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import GraphLayer from './GraphLayer';
import '../DashBoard.css';

export interface IGraphCardProps {
}

export default function GraphCard (props: IGraphCardProps) {
    const values: string[] = ['Today','This Month','This Year']
    const [selectValue, setSelectValue] = useState(values[0]);
    const handleChange = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value as string);
    };
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
                            $500.00
                        </Typography>
                        <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
                            Total
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{display:'flex',justifyContent:'flex-end'}}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectValue}
                                label=""
                                onChange={handleChange}
                                >
                                    {
                                        values.map(val => (
                                            <MenuItem key={val} value={val}>{val}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box> 
                    </Grid>
                    <Grid item xs={12}>
                        <GraphLayer type={selectValue}/>
                    </Grid>
                </Grid>
            </Box>
            
          </CardContent>
        </Card>
    );
}
