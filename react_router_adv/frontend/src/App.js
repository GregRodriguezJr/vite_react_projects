import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailsPage from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import Root from "./pages/Root"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/events", element: <EventsPage /> },
            { path: "/events/:eventId", element: <EventDetailsPage /> },
            { path: "/events/new", element: <NewEventPage /> },
            { path: "/events/:eventId/edit", element: <EditEventPage /> },
        ]
    },
    
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
