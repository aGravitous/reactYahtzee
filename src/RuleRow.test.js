import RuleRow from './RuleRow';
import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;

// Smoke test for RuleRow
it('renders without crashing', () => {
    shallow(<RuleRow />);
});

// Snapshot test
it("matches snapshot", function (){
    wrapper = shallow(<RuleRow/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});