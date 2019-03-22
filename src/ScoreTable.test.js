import ScoreTable from './ScoreTable';
import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;
let scores = {
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: 10,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined
  }

// Smoke test for ScoreTable
it('renders without crashing', () => {
    shallow(<ScoreTable scores={scores} />);
});

// Snapshot test for ScoreTable of scores
it("matches snapshot", function (){
    wrapper = mount(<ScoreTable
        scores={scores} />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});
