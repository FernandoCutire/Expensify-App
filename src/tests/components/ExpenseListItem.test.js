import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import  ExpenseListItem  from '../../components/ExpenseListItem';
import toJSON from 'enzyme-to-json';

test('should render ExpenseListItem correctly', () => {
const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(toJSON(wrapper)).toMatchSnapshot();
});