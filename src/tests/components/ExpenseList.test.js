import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpensesList';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';


test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList without expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();    
});


