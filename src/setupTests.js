import Enzyme from "enzyme";
import EnzymeAdapter from "module";

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})