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
});

// Test to make sure that all dice stay locked and cannot
// be clicked once rollsLeft is at 0.
// Also tests whether clicking roll reduces rollsLeft by one
// Also tests whether rolls reaching 1 or less sets dice
// to all locked.
it('should not allow unlock if rolls 0 or less', () => {
    wrapper = mount(<Game />);
    wrapper.setState({ rollsLeft: 1 });
    wrapper.find(".Game-reroll").simulate("click");
    wrapper.find(".Die-locked").first().simulate("click");
    expect(wrapper.state().locked).toEqual([true, true, true, true, true]);
});