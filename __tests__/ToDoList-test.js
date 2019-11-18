/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import ToDoList from '../src/ToDoList';

describe('ToDoList Rendering', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      items: [
        {
          text: 'some Todo 1',
          completed: false,
        },
        {
          text: 'some Todo 2',
          completed: true,
        },
      ],
      onCompleted: jest.fn(),
      onDeleted: jest.fn(),
    };
    wrapper = shallow(<ToDoList {...props} />);
  });

  it('is FlatList visible?', () => {
    expect(wrapper.find('FlatList')).toHaveLength(1);
  });

  it('should pass props to FlatList!', () => {
    expect(wrapper.find('FlatList').prop('data')).toBe(props.items);
  });
});
