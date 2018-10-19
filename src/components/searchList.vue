<!--
  function: seachList
  author  : wq
  update  : 2018/9/26 17:21
-->

<script>
export default {
  name: 'SearchList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    doSearch() {
      this.$emit('search')
    }
  },
  render(c) {
    const items = this.items || []
    return (
      <el-form class='search-wrap'>
        { items.map(item => {
          let el = ''
          if (item.type === 'input') {
            el = (
              <el-input value={ item.name } placeholder={ item.placeholder } onInput={ (value) => {
                item.name = value
              } }></el-input>
            )
          } else if (item.type === 'pick') {
            el = (
              <el-select value={ item.name } placeholder={ item.placeholder } onInput={ (value) => {
                item.name = value
              } }>
                { item.list.map(it => {
                  return <el-option label={ it.label } value={ it.value } key={ it.value }></el-option>
                }) }
              </el-select>
            )
          }
          return (
            <el-form-item label={ item.label }>
              { el }
            </el-form-item>
          )
        }) }
        <el-button type='primary' class='btn-search' onClick={ this.doSearch.bind(this) }>搜索</el-button>
      </el-form>
    )
  }
}
</script>

<style lang="scss">
  .search-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-form-item {
      display: flex;
      flex-direction: row;
      padding-right: 20px;
    }
    .btn-search {
      margin-bottom: 22px;
    }
  }
</style>
