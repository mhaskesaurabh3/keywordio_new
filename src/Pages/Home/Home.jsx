import { Dashboard } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React from 'react'
import DataTable from '../../Components/DataTable/DataTable'
import Graph from '../../Components/Graph/Graph'

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box>
        <Grid spacing={5} container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item md={6} xs={12} >
            <DataTable />
          </Grid>
          <Grid item md={6} xs={12} >
            <Graph />
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default Home