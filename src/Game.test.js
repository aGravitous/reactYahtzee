import Game from './Game';
import React from "react";
import { shallow, mount } from "enzyme";

let wrapper;
// let sets = {scores: {
//     ones: undefined,
//     twos: undefined,
//     threes: undefined,
//     fours: undefined,
//     fives: undefined,
//     sixes: undefined,
//     threeOfKind: undefined,
//     fourOfKind: undefined,
//     fullHouse: undefined,
//     smallStraight: undefined,
//     largeStraight: undefined,
//     yahtzee: undefined,
//     chance: 0
//   }}

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

//Test to make sure that a user cannot re-score the same scoring line
it('test to check user should not re-score the same scoring line', () => {
    wrapper = mount(<Game />);
    wrapper.setState({dice: [1,2,3,4,5], scores: { ...wrapper.state().scores}});
    
    wrapper.find(".RuleRow.RuleRow-active").last().simulate("click");
    expect(wrapper.state().scores.chance).toEqual(15);
    wrapper.find(".RuleRow.RuleRow-active").last().simulate("click");
    expect(wrapper.state().scores.chance).toEqual(15);
});