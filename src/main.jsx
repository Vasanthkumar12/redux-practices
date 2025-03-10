import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { postStore } from '../redux/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={postStore} >
        <App />
    </Provider>
)


// Step 1: Wrap the App component by Provider component.
// Step 2: import Provider from react-reduct library.
// Step 3: pass the postStore(which is the variable created in store.js file using createStore method )