import {createRoot} from "react-dom/client";
import React from 'react';
import { EmailEditor } from "./components/EmailEditor/EmailEditor";

const App = () => {
    return <EmailEditor />
}

createRoot(document.querySelector('#app')!).render(<App/>)