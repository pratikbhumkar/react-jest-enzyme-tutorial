import React from 'react'
import { shallow } from "enzyme";
import Header from "./Header";

let component ;
const setUp = (props={})=>{
    return component = shallow(<Header{...props}/>);
}

beforeEach(()=>{
    component = setUp();
})

describe('Header Component', ()=> {
    it('It should render without errors', ()=>{
        const wrapper= component.find(`[data-test='title']`);
        expect(wrapper.length).toBe(1);
    })
})
