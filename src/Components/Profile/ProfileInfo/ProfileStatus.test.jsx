import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

describe('ProfileStatus component', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatusWithHooks status='Days of Roses'/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.length).toBe(1)
    })
    test('after creation <span> should not contains correct status', () => {
        const component = create(<ProfileStatusWithHooks status='Days of Roses'/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatusWithHooks status='Days of Roses'/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.innerText).toBe('Days of Roses')
    })
})