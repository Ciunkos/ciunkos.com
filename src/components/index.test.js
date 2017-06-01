import React from 'react';
import { shallow, mount } from 'enzyme';

import {
    ActionButton,
    Background,
    Button,
    Header,
    InlineLink,
    Page,
    Section
} from 'components';

describe('Components rendering', () => {
    it('should render ActionButton without throwing an error', () => {
        expect(
            mount(<ActionButton name="test" />)
            .text()
        )
        .toBe('test');
    })

    it('should render Background without throwing an error', () => {
        const dummyImage = 'https://placekitten.com/200/300'

        expect(
            shallow(<Background src={dummyImage} />)
            .find({ style: { backgroundImage: `url("${dummyImage}")` } })
            .length
        )
        .toBe(1)
    })

    it('should render Button without throwing an error', () => {
        let clicked = false
        const wrapper = mount(
            <Button onClick={() => { clicked = true }} />
        );

        expect(clicked).toBe(false);
        wrapper.simulate('click');
        expect(clicked).toBe(true);
    })

    it('Button component should render as button HTML tag', () => {
        expect(
            shallow(<Button>Test</Button>)
            .html()
        ).toBe(
            '<button class="Button">Test</button>'
        );
    })

    it('should render Header without throwing an error', () => {
        expect(
            shallow(<Header />)
            .name()
        )
        .toBe('HeaderContainer');
    })

    it('should render a InlineLink without throwing an error', () => {
        expect(
            shallow(<InlineLink href="https://google.com" />)
            .exists()
        )
        .toBe(true)
    })

    it('should render a Page without throwing an error', () => {
        expect(
            shallow(<Page title="test" />)
            .name()
        )
        .toBe('styled.Page');
    })

    it('should render a Section without throwing an error', () => {
        expect(
            shallow(<Section />)
            .name()
        )
        .toBe('styled.Section');
    })
})
