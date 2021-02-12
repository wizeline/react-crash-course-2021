import React from 'react';
import { render, screen } from '../../utils/test-utils'
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Home.page';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe('HomePage', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <BrowserRouter><HomePage /></BrowserRouter>
      </Provider>
    );
  });

  it('Renders no videos found if no videos were provided', () => {
    render(
      component
    );
    expect(screen.getByText('Welcome to the challenge!')).toBeInTheDocument();
    expect(screen.queryAllByTestId('login-link').length).toEqual(1);
  });
});