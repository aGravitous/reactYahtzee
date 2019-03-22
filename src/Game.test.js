import Game from './Game';
import React from "react";
import { shallow, mount } from "enzyme";

let wrapper;

// Smoke test for Game
it('renders without crashing', () => {
    shallow(<Game />);
});

// does toggleLocked work
it('dice should lock/unlock on click', () => {
    wrapper = mount(<Game />);
    wrapper.setState({ locked: [true, false, false, false, false] });
    wrapper.find(".Die-locked").simulate("click");
    expect(wrapper.state().locked).toEqual([false, false, false, false, false]);
})