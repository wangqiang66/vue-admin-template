<!--
  function: 首页，对没有动态菜单，首页用于中转
  author  : wq
  update  : 2018/9/26 17:16
-->
<script>
export default {
  functional: true,
  beforeCreate() {
    const { query } = this.$route
    this.$router.replace({ path: '/login', query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
