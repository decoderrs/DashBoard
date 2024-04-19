import React, { Component } from 'react';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";


const store = ConfigureStore();

class App extends Component {

  render() {

    return (
      <ChakraProvider>
        <Provider store={store}>
          <BrowserRouter>
            <div className='App'>
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
      </ChakraProvider>
    );
  }
}
export default App;
