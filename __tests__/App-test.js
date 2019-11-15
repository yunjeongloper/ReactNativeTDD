/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('is Title visible', () => {
    expect(wrapper.find('Text').contains('TDD ToDo')).toBe(true); // TDD ToDo라는 내용의 Text Component가 있느냐?
  });

  it('is AddToDo visible?', () => {
    expect(wrapper.find('AddToDo')).toHaveLength(1); // AddToDo라는 컴포넌트가 한 개가 있느냐?
  });

  it('is ToDoList visible?', () => {
    expect(wrapper.find('ToDoList')).toHaveLength(1); // ToDoList 컴포넌트가 한 개가 있느냐?
  });
});
