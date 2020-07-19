import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage  from '../../components/ExpenseDashboardPage';
import toJSON from 'enzyme-to-json';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
});

