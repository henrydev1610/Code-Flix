import {Box ,ThemeProvider} from '@mui/system'
import Header from './Components/Header'
import { createTheme } from '@mui/material'





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

      </Box>

    </ThemeProvider>
  )
}


export default App