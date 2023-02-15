import { ActivityComponentType } from "@stackflow/react";
import PageLayout from "../components/layouts/PageLayout";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter, CardHeader,
    Container,
    Flex,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";

import logo from '../assets/jesusvaillage__logo.png';
import lamp from'../assets/lamp.png';
import vector from'../assets/vector.png';
import {useFlow} from "../stackflow";

const Home: ActivityComponentType = () => {
    const Array7 = Array(7).fill(true);
    const {push} = useFlow();
    
    const onClick = () => {
        push("Book", {
            title: "Book"
        }, {
            animate: true
        });
    }
    
    return (
        <PageLayout>
            <Box as="header" p={4} display={"flex"} position={"sticky"} top={0} zIndex={1} backgroundColor={"white"}>
                <Flex align={"center"} justify="space-between" width="100%">
                    <Image src={logo} borderRadius={2}/>
                    <Box display="flex" width={"100%"} ml={4}>
                        <Flex align={"start"} justify="space-between" direction="row" width={"100%"}>
                            <Heading size={"xl"}>셀그룹 제자양육</Heading>
                            <Button outline={"ghost"} colorScheme={"whiteAlpha"}>
                                <Image src={lamp}/>
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            {Array7.map((_ , index) => {
                return(
                    <Container as="section" py={4}>
                        <Card justify={"end"} direction={"column"} backgroundColor={"orange.400"} color={"white"}>
                            <CardHeader p={2}>
                                <Box display={"flex"}>
                                    <Flex direction={"row"} align={"center"} gap={2}>
                                        <Heading as="h2" size={"lg"}>제자양육</Heading>
                                        <Text>{`${index + 1}과`}</Text>
                                    </Flex>
                                </Box>
                            </CardHeader>
                            <CardBody p={2}>
                                <Box>
                                    <Flex direction={"column"} align={"start"}>
                                        <Heading as={"h3"} size={"lg"} textAlign={"start"}>하나님은 나를 영원히 사랑하시는 분이십니다</Heading>
                                        <Text>에스더 4장 23절</Text>
                                    </Flex>
                                </Box>
                            </CardBody>
                            <CardFooter p={2}>
                                <Button outline={"ghost"} backgroundColor={"white"} width={"100%"} color="black" onClick={onClick}>
                                    <Box display={"flex"} width={"100%"} p={0}>
                                        <Flex direction={"row"} align={"center"} justify={"space-between"} width={"100%"}>
                                            <Text>QT 하러가기</Text>
                                            <Image src={vector}/>
                                        </Flex>
                                    </Box>
                                </Button>
                            </CardFooter>
                        </Card>
                    </Container>
                )
            })}
        </PageLayout>
    );
};

export default Home;
