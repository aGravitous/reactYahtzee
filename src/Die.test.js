import Die from './Die';
import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;

// Smoke test for Die
it('renders without crashing', () => {
    shallow(<Die />);
});

// Snapshot test for unlocked die
it("matches unlocked snapshot", function (){
    wrapper = shallow(<Die
        locked={false}
        val={1}
        />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});


// Snapshot test for locked die
it("matches locked snapshot", function (){
    wrapper = shallow(<Die
        locked={true}
        val={1}
        />);
        let serialized = toJson(wrapper);
        console.log(serialized);
    expect(serialized).toMatchSnapshot();
});