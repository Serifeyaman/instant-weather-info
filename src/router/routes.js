import ApiKey from "pages/ApiKey"
import NotFound from "pages/NotFound"

export const routes = [
    {
        path: "/",
        element: <ApiKey />

    },
    {
        path: "*",
        element: <NotFound />
    }
]