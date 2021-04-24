<template>
  <div class="news_container">
      <div class="news_image">
          <img :src="infoDatas.imgSrc"  class="img_class" ><img>
      </div>
      <div class="news_title">
        <span class="title_class">{{infoDatas.title}}</span>
      </div>
      <div class="news_time">
        <span><i class="el-icon-time" style="padding-right:0.2rem"></i>{{infoDatas.time}}</span>
      </div>
  </div>
</template>

<script>
const infoDatas1 = {
    src:'',
    key:1,
  };

export default {
  name: 'NewsContainer',
  props:{
      infoDatas:{
          type:Object,
          default: function () {
            return infoDatas1;
          },
      }
  },
  data(){
    return {}
  }
};
</script>
<style lang="scss" scoped>
.news_container{
    width:480px;
    .news_image{
      .img_class{
        cursor: pointer;
        width: 480px;
        height: 300px;
      }
    }
    .news_title{
      font-size: 1.4rem;
      font-weight: bold;
      padding: 1.2rem;
      .title_class{
        cursor: pointer;
      }
    }
    .news_time{
          padding: 0 1.2rem 1.2rem 1.2rem;
    }
    .img_class:hover{
      color: blue;
    }
    .title_class:hover{
      color: blue;
    }
}
</style>