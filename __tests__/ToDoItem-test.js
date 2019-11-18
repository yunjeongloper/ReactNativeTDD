/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import ToDoItem from '../src/ToDoItem';

describe('ToDoItem Rendering', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      item: {},
    };

    wrapper = shallow(<ToDoItem {...props} />);
  });

  it('is Text visible?', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('is two TouchableOpacity visible?', () => {
    expect(wrapper.find('TouchableOpacity')).toHaveLength(2);
  });

  describe('Uncompleted', () => {
    it('should have the default style', () => {
      expect(
        wrapper
          .find('Icon')
          .at(0)
          .prop('name'),
      ).toBe('circle-outline');
    });
  });

  describe('Completed', () => {
    beforeEach(() => {
      props.item.completed = true;
      wrapper = shallow(<ToDoItem {...props} />);
    });

    it('should have the completed style', () => {
      expect(
        wrapper
          .find('Icon')
          .at(0)
          .prop('name'),
      ).toBe('circle-slice-8');
    });
  });
});

describe('ToDoItem Interaction', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      item: {
        text: 'First ToDo',
        competed: false,
      },
      index: 0,
      onCompleted: jest.fn(),
      onDeleted: jest.fn(),
    };

    wrapper = shallow(<ToDoItem {...props} />);
  });

  describe('Complete', () => {
    beforeEach(() => {
      wrapper = shallow(<ToDoItem {...props} />);
      wrapper
        .find('TouchableOpacity')
        .at(0)
        .prop('onPress')();
    });

    it('should pass the index to onCompleted', () => {
      expect(props.onCompleted).toHaveBeenCalledTimes(1);
      expect(props.onCompleted).toHaveBeenCalledWith(props.index);
    });
  });

  describe('Delete', () => {
    beforeEach(() => {
      props.item.completed = true;
      wrapper = shallow(<ToDoItem {...props} />);
      wrapper
        .find('TouchableOpacity')
        .at(1)
        .prop('onPress')();
    });

    it('should pass the index to onDeleted', () => {
      expect(props.onDeleted).toHaveBeenCalledTimes(1);
      expect(props.onDeleted).toHaveBeenCalledWith(props.index);
    });
  });
});
