import React from 'react'
import { shallow, mount } from 'enzyme'

import LoginForm from './LoginForm'

describe('LoginForm', () => {
  let props
  let mockFn

  beforeEach(() => {
    mockFn = jest.fn()
    props = {
      submitForm: mockFn,
    }
  })

  it('should have an onSubmit attribute', () => {
    const wrapper = shallow(<LoginForm {...props} />)
    expect(wrapper.props().onSubmit).toBeDefined()
  })

  it('onSubmit should be a function', () => {
    const wrapper = shallow(<LoginForm {...props} />)
    expect(typeof wrapper.props().onSubmit === 'function').toBe(true)
  })

  it('should have two inputs', () => {
    const wrapper = shallow(<LoginForm {...props} />)
    expect(wrapper.find('Input')).toHaveLength(2)
  })

  it('should have a submit button', () => {
    const wrapper = shallow(<LoginForm {...props} />)
    expect(wrapper.find('Button')).toHaveLength(1)
  })

  it('should have form errors', () => {
    const wrapper = shallow(<LoginForm {...props} />)
    expect(wrapper.find('FormErrors')).toHaveLength(1)
  })

  it('should update the state when a value is input', () => {
    const username = 'dbd@gmail.com'
    const wrapper = shallow(<LoginForm {...props} />)
    const input = wrapper.find('Input').at(0)
    input.simulate('change', {
      target: {
        name: 'username',
        value: username,
      },
    })
    expect(wrapper.state().username).toBe(username)
  })
})
