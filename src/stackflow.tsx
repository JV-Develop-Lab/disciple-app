import "@stackflow/plugin-basic-ui/index.css";

import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Book from "./pages/Book";

export const activities = {
    Home,
    Info,
    Book
}

export type TypeActivities = keyof typeof activities

export const { Stack, useFlow } = stackflow({
    transitionDuration: 350,
    activities,
    plugins: [
        () => {
            return {
                key: "my-plugin",
                onInit() {
                    console.log("Initialized!");
                },
            };
        },
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    initialActivity: () => "Home",
});
