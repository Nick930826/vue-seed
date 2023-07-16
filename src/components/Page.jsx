
// 描述组件
import { defineComponent } from 'vue'
import { ElContainer } from 'element-plus'

const Page = defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () => <ElContainer style={{ height: '100%', flexDirection: 'column' }}>
      <div
        style={{
          height: '40px',
          padding: '10px'
        }}
      >{props.title}</div>
      {slots.default()}
    </ElContainer>
  }
})

export default Page