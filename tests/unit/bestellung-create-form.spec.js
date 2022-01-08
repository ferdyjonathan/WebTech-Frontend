import BestellungCreateForm from '@/components/BestellungCreateForm'
import { mount } from '@vue/test-utils'

describe('Testing BestellungCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(BestellungCreateForm)

    // then
    expect(wrapper.find('#order-create-offcanvas').classes()).not.toContain('show')
  })
})
