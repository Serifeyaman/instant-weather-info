import React from 'react'
import { Provider } from 'react-redux'
import store from 'redux/store'
import MyRouter from 'router/MyRouter'

const App = () => {
  return (
    <Provider store={store}>
      <MyRouter />
    </Provider>
  )
}

export default App