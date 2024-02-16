import { Box } from "@mui/material"
import { Container } from "@mui/system"



const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <Box>
        <Container maxWidth= "lg"  sx={{mt:4, mb:4, bg: "white ", color: "white"}}>
            {children}
        </Container>
    </Box>
  )
}

export default Layout