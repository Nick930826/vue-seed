
// 描述组件
import { defineComponent } from 'vue'
import { ElContainer } from 'element-plus'

const Page = defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    return () => <ElContainer style={{ height: '100%', flexDirection: 'column' }}>
      <div style={{ height: '40px', padding: '0 16px', display: 'flex', alignItems: 'center' }}>
        <img style={{ width: '16px', flexShrink: 0, marginRight: '5px', cursor: 'pointer' }} src='http://cdn-xx.wxb.com/wealth-admin/FSXREe.webp' />
        {props.title}
      </div>
      {slots.default()}
    </ElContainer>
  }
})

export default Page