import {Box} from "@chakra-ui/react";
import {HTMLAttributes} from "react";
import Navbar from "../Navbar";
import {AppScreen} from "@stackflow/plugin-basic-ui";

type PageLayoutProps = HTMLAttributes<HTMLDivElement>;

export default function PageLayout({...props}: PageLayoutProps){
    return <AppScreen>
        <Box as="main" position="relative" h="100vh" width="100%" overflow={"hidden"}>
            <Box overflow={"scroll"} width={"100%"} height={"100%"} pb={"60px"}>
                {props.children}
            </Box>
            <Navbar/>
        </Box>
    </AppScreen>
    
}
