import ScoreTable from './ScoreTable';
import React from "react";
import RuleRow from "./RuleRow"
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;
let passedScore = {
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
    shallow(<ScoreTable scores={passedScore}/>);
});

// Snapshot test for ScoreTable of scores
it("matches snapshot", function (){
    wrapper = mount(<ScoreTable scores={passedScore} />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("runs correct doScore on click", function(){
    const scoreFn = jest.fn();
    let wrapper = mount(<RuleRow name="Ones" score={3} doScore={ scoreFn }/>);
    let ruleBtn = wrapper.find(".RuleRow").first();

    ruleBtn.simulate("click");
    expect(scoreFn).toHaveBeenCalled();
    expect(wrapper.matchesElement(<tr class="RuleRow RuleRow-active"><td class="RuleRow-name">Ones</td><td class="RuleRow-score">3</td></tr>));
});