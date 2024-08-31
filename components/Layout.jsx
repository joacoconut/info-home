import { Box } from "@chakra-ui/react"
import Head from "next/head"
import { Navbar, Footer } from "./index"



export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Info Home</title>
            </Head>

            <Box maxWidth="1280px" m="auto">
                <header>
                    <Navbar />
                </header>

                <main>
                    {children}
                </main>

                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}
