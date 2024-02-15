import {Box ,ThemeProvider} from '@mui/system'
import Header from './Components/Header'

import Layout from './Components/Layout'
import { appTheme } from './Config/theme'
import { Typography } from '@mui/material'







const App = ()=>{
  return(
    <ThemeProvider theme={appTheme}>
        
      <Box
        component='main'
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900]



        }}
      
      
      >
        <Header/>
        <Layout>
          <Typography variant='h1' component='h1'>
              testing

          </Typography>
        </Layout>

      </Box>

    </ThemeProvider>
  )
}


export default App