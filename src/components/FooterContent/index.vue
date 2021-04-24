<template>
  <div class="container_class">
      <div class="columns_content" v-for="item in footerDatas" :key="item.title">
        <span class="footer_title">{{item.title}}</span>
        <div class="footer_content_container">
          <span class="footer_content"  v-for="ele in item.contents" :key="ele.content">{{ele.content}}</span>
        </div>
      </div>
  </div>
</template>

<script>
const footerDatas = [
    {
        title:'新闻中心',
        contents:[
            {
                content:'遥感动态'
            },
            {
                content:'测绘动态'
            }
        ]
    },
    {
        title:'解决方案',
        contents:[
            {
                content:'气象行业'
            },
            {
                content:'无人机'
            }
        ]
    }
]

export default {
  name: 'NewsContainer',
  props:{
     footerDatas:{
      type: Array,
      default: function () {
        return footerDatas;
      }
    },
  },
  data(){
    return {}
  }
};
</script>
<style lang="scss" scoped>
  .container_class{
    display: flex;
    color: white;
    justify-content: space-evenly;
    width: 70%;
    .columns_content{
      
      .footer_title{
        font-size: 1.3rem;
      }
      .footer_content_container{
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        line-height: 2rem;
        .footer_content{
          font-size: 1.1rem;
        }
      }
    }
    .footer_title:hover{
      cursor: pointer;
      color: blue;
    }
    .footer_content:hover{
      cursor: pointer;
      color: blue;
    }
  }
</style>