<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">AXON</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/userCenter">个人中心</router-link>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              <router-link to="/calCenter"> 计算中心</router-link>
            </MenuItem>
            <Submenu  name="3" >
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                <router-link to="/appCenter"> 应用中心</router-link>
              </template>
              <MenuItem name="3-1">中标查询</MenuItem>
            </Submenu >
          </div>
        </Menu>
      </Header>
      <router-view></router-view>
      
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
  </div>
</template>
<script>
  export default {
    methods: {
      select(name) {
        this.$router.push(name);
      }

     }
  }
</script>
