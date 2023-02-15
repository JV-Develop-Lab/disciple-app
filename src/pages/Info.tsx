import { ActivityComponentType } from "@stackflow/react";
import {Box} from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";

type InfoParams = {
    title: string;
};
const Info: ActivityComponentType<InfoParams> = ({ params }) => {
    
    return (
        <PageLayout>
            <Box height="100%">
                <h1>{params.title}</h1>
            </Box>
        </PageLayout>
    );
};

export default Info;
