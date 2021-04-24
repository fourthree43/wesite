<template>
  <section id="nav-bar">
    <section class="sys-name">
      <span class="logo"><img :src="sysLogo" alt="" /></span>
      <span class="title">{{ sysName }}</span>
    </section>
    <section class="sys-menu">
      <el-menu
        mode="horizontal"
        menu-trigger="hover"
        router
        unique-opened
        :default-active="activeIndex"
        @select="handleSelect"
      >
        <nav-item v-for="item in routes || []" :key="item.path" :menuData="item" />
      </el-menu>
    </section>
  </section>
</template>

<script>
import Vue from 'vue';
import { Menu, Submenu, MenuItem } from 'element-ui';
import NavItem from './NavItem.vue';

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

export default {
  name: 'NavBar',
  data() {
    return {
      routes: [],
      activeIndex: '',
      sysName: '',
      sysLogo: '',
    };
  },
  components: {
    NavItem,
  },

  watch: {
    // $route(to) {
    //   const [toPath] = to.path.split('/').filter(Boolean);
    //   this.filterRouters(toPath);
    // },
  },

  mounted() {
    const { currentRoute } = this.$router;
    const { path } = currentRoute;
    const [curSystem] = path.split('/').filter(Boolean);
    this.filterRouters(curSystem);
  },

  methods: {
    // 当前选中的tab页
    handleSelect(key) {
      this.activeIndex = key;
    },

    // 过滤路由
    filterRouters(toPath) {
      const { options, currentRoute } = this.$router;
      const { path } = currentRoute;
      const { routes } = options;
      const sysRoute = routes[0].children;
      const [curRoutes] = sysRoute.filter((item) => item.path.includes(toPath));
      console.log('curRoutes', curRoutes);
      this.sysName = curRoutes.name;
      this.sysLogo = curRoutes.meta.sysLogo;
      this.routes = curRoutes?.children;
      this.activeIndex = path;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin eleMenuActive($size: 0.3rem, $color: lightblue) {
  border-bottom: $size solid $color;
  border-bottom-color: $color !important;
  // background: linear-gradient(0deg, #6dcdffc4 0%, rgba(109, 191, 255, 0) 90%);
  background: #4a4545;
  transition: none;
}
#nav-bar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.15rem;
  color: #fff;
  background: #4a4545;
  // position: relative;
  .sys-name{
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    .logo{
      padding-right:1rem;
      img{
        width: 4.5rem;
      }
    }
  }
  .sys-menu {
    margin:auto;
    margin-top:0;
    margin-bottom: 0;
    .el-menu--horizontal{
      margin: 0;
      padding: 0;
    }
    .el-menu {
      border: none;
      background: transparent;
      display: flex;
      list-style-type: none;
      align-items: center;
      .el-menu-item {
        height: 2rem;
        line-height: 2rem;
        color: #fff;
        font-size: 1.1rem;
        margin-right: 4rem;
        cursor: pointer;
        &:not(.is-disabled):hover {
          @include eleMenuActive();
        }
        &.is-active {
          @include eleMenuActive();
        }
      }
    }
    // * {
    //     margin: 0;
    //     padding: 0;
    //   }
  }
  
}


</style>
