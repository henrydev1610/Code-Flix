import {Box ,ThemeProvider} from '@mui/system'
import Header from './Components/Header'
import { createTheme } from '@mui/material'
import Layout from './Components/Layout'





const theme = createTheme({})


const App = ()=>{
  return(
    <ThemeProvider theme={theme}>
        
      <Box
        component='main'
        sx={{
          height: "100vh",
          backgroundColor: "#000",



        }}
      
      
      >
        <Header/>
        <Layout>
          <h1> Olá mundo!</h1>
        </Layout>

      </Box>

    </ThemeProvider>
  )
}


export default App