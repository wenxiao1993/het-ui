<template>
  <button class="h-button" :class="`h-button-${type}`">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  // 组件名称
  name: 'h-button',
  // 局部注册的组件
  components: {},
  // 组件参数 接收来自父组件的数据
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  // 组件状态值
  data () {
    return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created () {},
  /**
   * el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.el 也在文档内。
   */
  mounted () {},
  // 组件方法
  methods: {}
}
</script>

<style scoped lang="scss">
.h-button {
  display: inline-block;
  margin: 0 3.5px;
  padding: 0 3.5rem;
  line-height: 2.5rem;
  min-width: 12.5rem;
  word-spacing: nowrap;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 4px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  color: #666666;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-size: 0.8rem;
  transition: 0.1s;
  &:hover,
  &:focus {
    border: 1px solid #000;
    color: #000;
  }
}
.h-button-primary {
  background-color: #000;
  color: #fff;
  &:hover,
  &:focus {
    border: 1px solid #000;
    color: #000;
    background-color: #fff;
  }
}
.h-button-success {
  background-color: #2772eb;
  border: 1px solid #2772eb;
  color: #fff;
  &:hover,
  &:focus {
    border: 1px solid #2772eb;
    color: #2772eb;
    background-color: #fff;
  }
}
.h-button-warning {
  background-color: #eaa844;
  border: 1px solid #eaa844;
  color: #fff;
  &:hover,
  &:focus {
    border: 1px solid #eaa844;
    color: #eaa844;
    background-color: #fff;
  }
}
.h-button-danger {
  background-color: #db2e20;
  border: 1px solid #db2e20;
  color: #fff;
  &:hover,
  &:focus {
    border: 1px solid #db2e20;
    color: #db2e20;
    background-color: #fff;
  }
}
.h-button-abort {
  background-color: rgba(255, 255, 255, 1);
  border: none!important;
  color: #fff;
  &:hover,
  &:focus {
    border: none;
    color: #000;
  }
}
</style>
