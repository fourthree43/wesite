<template>
  <el-submenu
    v-if="menuData.children && menuData.children.length >= 1"
    :index="menuData.path"
    :hide-timeout="500"
    :show-timeout="100"
  >
    <template slot="title">{{ menuData.name }}</template>
    <NavItem v-for="item in menuData.children" :key="item.path" :menuData="item"></NavItem>
  </el-submenu>
  <el-menu-item v-else-if="!(menuData.meta && menuData.meta.hide)" :index="menuData.path">
    {{ menuData.name }}
  </el-menu-item>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    menuData: {
      type: Object,
      require: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss"></style>
