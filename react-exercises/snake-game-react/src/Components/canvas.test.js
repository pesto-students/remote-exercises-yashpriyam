import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Canvas from './canvas';

Enzyme.configure({ adapter: new Adapter() });
