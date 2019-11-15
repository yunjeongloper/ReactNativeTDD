/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import ToDoList from '../src/ToDoList';

describe('ToDoList Rendering', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToDoList />);
  });

  it('is FlatList visible?', () => {
    expect(wrapper.find('FlatList')).toHaveLength(1);
  });
});

describe('ToDoList Interaction', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToDoList />);
  });

  it('should call the onAdded callback with input text', () => {});
});
