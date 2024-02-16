import { Box, ThemeProvider } from "@mui/system"
import Header from "./Components/Header"
import { Route, Routes, Link } from "react-router-dom"
import Layout from "./Components/Layout"
import { appTheme } from "./Config/theme"
import { Typography } from "@mui/material"
//import Sobre from "./Components/Sobre"


const Home = () =>(
  <Box>
    <Typography variant="h3" component='h1'>
        Home
    </Typography>
  </Box>
)

const Sobre = ()=>(
  <Box>
    <Typography variant="h3" component='h1'>
          sobre
    </Typography>
  </Box>
)


const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: theme => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <h1>Bem vindo Usuário!</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Sobre />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
