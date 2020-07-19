import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage  from '../../components/NotFoundPage';
import toJSON from 'enzyme-to-json';

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
});
