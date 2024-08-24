import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Counter} from './features/counter/counter.js'
import store from './app/store.js'
import { Provider} from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Counter/>} />
        </Routes>
    </BrowserRouter>
  </Provider>
)