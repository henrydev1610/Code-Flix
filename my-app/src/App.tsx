import {Box ,ThemeProvider} from '@mui/system'
import Header from './Components/Header'

const App = ()=>{
  return(
    <ThemeProvider theme={{}}>
        
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