import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediumCard from './MediumCard';
import SmallCard from './SamllCard';
import GraphCard from './GraphCard/GraphCard';
import DataCard from './DataCard/DataCard';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function DashBoard () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4} >
          <MediumCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4} >
          <MediumCard/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={12} xl={12}>
                <SmallCard/>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={12} xl={12}>
                <SmallCard/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8} >
          <GraphCard/>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4} >
          <DataCard/>
        </Grid>
      </Grid>
    </Box>
  );
}
