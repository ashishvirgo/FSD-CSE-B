import ReactDOM from 'react-dom/client'
import '/style.css'
import App from './App';

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>)