import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Canvas from './canvas';

Enzyme.configure({ adapter: new Adapter() });

describe('snake', () => {
  it('snake length', () => {
    let snakeArray = [...Array(5).keys()].map(x => [0, 2*x]);
    const wrapper = render(<Canvas snakeSquares={snakeArray}/>);
    const snakelength = wrapper['0'].children.length;
    expect(snakelength).toBe(5);
  })
})