import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import Todo from '../../src/components/Todo.vue'

describe('Todo.vue', () => {
  it('computed: filteredTodos returns only short todos', async () => {
    const wrapper = mount(Todo)
    
    wrapper.vm.todos = [
        { id: 1, text: 'short' },
        { id: 2, text: 'this is very long' }
    ]
    wrapper.vm.filter = 'short'
    await nextTick()

    const items = wrapper.vm.filteredTodos
    expect(items.length).toBe(1)
    expect(items[0].text).toBe('short')
  })

  it('adds a todo when input is valid and Enter is pressed', async () => {
    const wrapper = mount(Todo)
    const input = wrapper.find('input')

    await input.setValue('Buy milk')
    await input.trigger('keydown.enter')

    expect(wrapper.vm.todos.length).toBe(1)
    expect(wrapper.vm.todos[0].text).toBe('Buy milk')
  })

  it('shows an error when trying to add an empty todo', async () => {
    const wrapper = mount(Todo)
    const input = wrapper.find('input')

    await input.setValue('')
    await input.trigger('keydown.enter')

    expect(wrapper.vm.error).toBe('Todo cannot be empty')
    expect(wrapper.find('.error').text()).toBe('Todo cannot be empty')
    expect(wrapper.vm.todos.length).toBe(0)
  })
})
