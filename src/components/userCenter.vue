<style scoped>
  .layout-con{
    height: 100%;
    width: 100%;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" @on-select="select">
          <MenuItem name="bill">
            <Icon type="ios-navigate"></Icon>
            <span>账单</span>
          </MenuItem>
          <MenuItem name="accountQuery">
            <Icon type="search"></Icon>
            <span>账户查询</span>
          </MenuItem>
          <MenuItem name="option">
            <Icon type="settings"></Icon>
            <span>Option</span>
          </MenuItem>
          <MenuItem name="companyAuthentication">
            <Icon type="settings"></Icon>
            <span>公司认证</span>
          </MenuItem>

        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isCollapsed: false
      };
    },
    methods:{
      select(name) {
        this.$router.push('/userCenter/'+name);
      }
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    }
  }
</script>
