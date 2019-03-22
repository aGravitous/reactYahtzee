import Game from './Game';
import React from "react";
import { shallow } from "enzyme";

// Smoke test for Game
it('renders without crashing', () => {
    shallow(<Game />);
});