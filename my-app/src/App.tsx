import { Box, ThemeProvider, typographyVariant } from "@mui/system"
import Header from "./Components/Header"
import { Route, Routes, } from "react-router-dom"
import Layout from "./Components/Layout"
import { appTheme } from "./Config/theme"
import { Typography } from "@mui/material"
import { ListCategory } from "./features/Categories/ListCategory"
import { CreateCategory } from "./features/Categories/CreateCategory"
import { EditCategory } from "./features/Categories/EditCategory"
//import Sobre from "./Components/Sobre"

/* 
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
) */


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
          
          <Routes>
            <Route path="/" element={<ListCategory/>} />
            <Route path="/categories" element={<ListCategory/>} />
            <Route path="/categories/create" element={<CreateCategory/>} />
            <Route path="/categories/edit/:id" element={<EditCategory/>} />
            <Route path="*" element={
             <Box sx={{color: "white"}} >
              <Typography variant="h1" sx={{color: "red"}} component='h1'>ERRO: 404</Typography>
              <Typography variant="h2" component='h1'>Página Não encontrada!</Typography>
            </Box>
            } />
          </Routes>

        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
