<!--
  function: 按钮事件列表
  author  : wq
  update  : 2018/9/26 17:21
-->

<script>
export default {
  name: 'BtnList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    clickBtn(item) {
      console.log(item)
    }
  },
  render() {
    const items = this.items || []
    return (
      <el-row class='btn-list-wrap'>
        { items.map(item => {
          return (
            <el-button type='primary' onClick={ () => {
              this.clickBtn(item)
            } }>{ item.name }
            </el-button>
          )
        }) }
      </el-row>
    )
  }
}
</script>

<style lang="scss">
  .btn-list-wrap {
    padding-bottom: 22px;
  }
</style>
