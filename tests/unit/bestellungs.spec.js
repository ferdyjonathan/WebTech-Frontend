import { mount } from '@vue/test-utils'
import BestellungsList from '@/components/BestellungsList'
import BestellungCreateForm from '@/components/BestellungCreateForm'
import Dashboard from '@/views/Dashboard.vue'
import Bestellungs from '@/views/Bestellungs'

describe('Testing Dashboard.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Dashboard)

    // then
    expect(wrapper.text()).toMatch('List of Product')
  })

  it('should have order list component', () => {
    // when
    const wrapper = mount(Dashboard)

    // then
    const List = wrapper.findComponent(BestellungsList)
    expect(List.exists()).toBeTruthy()
  })

  it('should have order create form component', () => {
    // when
    const wrapper = mount(Dashboard)

    // then
    const createForm = wrapper.findComponent(BestellungCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
