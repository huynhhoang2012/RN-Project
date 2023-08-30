import React from 'react';
// import {create, act} from 'react-test-renderer';
import LoginScreen from '../src/screens/Login';
import {render, fireEvent} from '@testing-library/react-native';

// const tree = create(<LoginScreen />);

// test('snapshot', () => {
//   expect(tree).toMatchSnapshot();
// });

// test('button click', () => {
//   const button = tree.root.findByProps({testID: 'buttonLogin'}).props;
//   act(() => button.onPress());

//   const text = tree.root.findByProps({testID: 'testText'}).props;
//   expect(text.children).toEqual('admin');
// });

test('renders login screen correctly', () => {
  const {getByPlaceholderText, getByText} = render(<LoginScreen />);

  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  expect(usernameInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
  expect(loginButton).toBeTruthy();
});

test('displays status login', () => {
  const {getByPlaceholderText, getByText} = render(<LoginScreen />);

  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  fireEvent.changeText(usernameInput, 'admin');
  fireEvent.changeText(passwordInput, 'admin');
  fireEvent.press(loginButton);

  const successMessage = getByText('login successful');
  expect(successMessage).toBeTruthy();
});
