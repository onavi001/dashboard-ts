import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader, Grid, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IgrSparkline } from "igniteui-react-charts";
import { SparklineSharedData } from "./SparklineSharedData";
import './DashBoard.css';
export interface IMediumCardProps {
}

export default function MediumCard (props: IMediumCardProps) {
    const [data,setData] = useState<any[]>(SparklineSharedData.getPaddedDataForMarkers());
    
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                action={
                <IconButton aria-label="settings">
                    <MoreHorizIcon />
                </IconButton>
                }
            />
          <CardContent>
            
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
                            $500.00
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                            Total earning
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="container sample">
                            <div className="container">
                            <IgrSparkline
                                height="100%"
                                width="100%"
                                //ref={onSparklineRef(sparkline)}
                                dataSource={data}
                                valueMemberPath="Value"
                                displayType="Line"
                                minimum={-3}
                                maximum={8}
                                markerVisibility="Collapsed"
                                highMarkerVisibility="Collapsed"
                                lowMarkerVisibility="Collapsed"
                                firstMarkerVisibility="Collapsed"
                                lastMarkerVisibility="Collapsed"
                                negativeMarkerVisibility="Collapsed"
                                markerSize={10}
                                firstMarkerSize={10}
                                lastMarkerSize={10}
                                lowMarkerSize={10}
                                highMarkerSize={10}
                                negativeMarkerSize={10}
                            />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            
          </CardContent>
        </Card>
    );
}
