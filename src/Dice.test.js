import Dice from './Dice';
import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;

// Smoke test for Dice
it('renders without crashing', () => {
    shallow(<Dice  locked={[false, true, false, false, true]} dice={[1,2,3,4,5]}/>);
});

// // Snapshot test for dice of locked = [false, true, false, false, true]
// // dice = [1,2,3,4,5]
it("matches unlocked snapshot", function (){
    wrapper = mount(<Dice
        locked={[false, true, false, false, true]}
        dice={[1,2,3,4,5]}
        />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});
