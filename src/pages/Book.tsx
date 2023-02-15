import {Box, Button, Center} from "@chakra-ui/react";
import {AppScreen} from "@stackflow/plugin-basic-ui";
import {useFlow} from "../stackflow";

export default function Book(){
    const {pop} = useFlow();
    return(
        <AppScreen>
            <Box height={"100%"} width="100%" backgroundColor={"black"}>
                <Center>
                    <Button onClick={pop}>닫기</Button>
                </Center>
            </Box>
        </AppScreen>
    )
}
