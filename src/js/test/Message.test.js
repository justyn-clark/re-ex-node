import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import App from '../Message'

describe('<Message />', () => {
  test('renders a single <p> tag', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
})
