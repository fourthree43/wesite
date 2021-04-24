<template>
  <div class="home_container">
    <div class="first_row_container">
      <el-carousel :interval="3000" type="card"  indicator-position='none' height="400px">
        <el-carousel-item v-for="item in carouselImages" :key="item.key">
          <div>
            <img :src="item.src" width="1000px" height="800px" class="carousel_image">
          </div>
          <!-- <h3 class="medium">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="second_row_container">
      <div class="title_container">
        <el-divider>
          <div class="news_title">
            <span>新闻中心</span>
          </div>
        </el-divider>
      </div>
      
      <div class="news_content">
         <NewsContainer v-for="item in infoDatas" :infoDatas="item" :key="item.title"></NewsContainer>
      </div>
    </div>
    <div class="third_row_container">
      <div class="title_container">
        <el-divider>
          <div class="news_title">
            <span>解决方案</span>
          </div>
        </el-divider>
      </div>
      <div class="solutions_group_container">
        <div class="solution_container" v-for="solution in solutions" :key="solution.title">
          <img :src="solution.imgSrc" width="300px" height="250px" class="solution_img_class" 
          @onMouseEnter="mouseEnterEvent" @onMouseLeave="this.src=solutions.otherImg"
          />
          <div style="padding-top:0.3rem,padding-bottom:0.5rem">
            <span class="solution_title">{{solution.title}}</span>
          </div>
        </div>
      </div>
      
    </div>
    <div class="footer_row_container">
      <FooterContent :footerDatas="footerDatas"></FooterContent>
      <div class="contact_container">
        <span class="contact_title">关注我们:</span>
        <div class="contact_img_container">
          <div v-for="todo in contactInfos" :key="todo.title" class="img_title_container">
            <img :src="todo.imgSrc" class="contact_img_class"/>
            <span class="img_title">{{todo.title}}</span>
          </div>
        </div>
        <span class="contact_title">联系我们:</span>
        <div style="padding-top: 0.4rem">
          <span class="contact_content">联系方式：010-76725422</span><br/>
          <span class="contact_content">联系地址：福州市闽侯县大学新区学园路2号福州大学(旗山校区)内</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsContainer from '../../components/NewsContainer/index.vue';
import FooterContent from '../../components/FooterContent/index.vue';

import carouselImage01 from '../../static/image1.jpg';
import carouselImage02 from '../../static/image2.jpg';
import carouselImage03 from '../../static/image3.jpg';
import carouselImage04 from '../../static/image4.jpg';

import news01 from '../../static/news/news01.jpeg';
import news02 from '../../static/news/news02.jpeg';

import QQ from '../../static/contact/QQ.png';
import wechat from '../../static/contact/wechat.png';

import UAV from '../../static/resolve/UAV.jpeg';
import WSE from '../../static/resolve/WSE.jpeg';
import agriculture from '../../static/resolve/agriculture.jpeg';
import dataAcquision from '../../static/resolve/dataAcquision.jpeg';
import planning from '../../static/resolve/planning.jpeg';
import weather from '../../static/resolve/weather.jpeg';

const carouselImages = [
  {
    src:carouselImage01,
    key:1,
  },
  {
    src:carouselImage02,
    key:2,
  },
  {
    src:carouselImage03,
    key:3,
  },
  {
    src:carouselImage04,
    key:4,
  },
]

const infoDatas = [
  {
    imgSrc:news01,
    title:"相比较其它遥感数据获取方式,测绘无人机精度更高，作业方式更灵活。",
    time:new Date().toLocaleString(),
  },
  {
    imgSrc:news02,
    title:"测绘观点:如何开展新型基础测绘工作?",
    time:new Date().toLocaleString(),
  }
]

const footerDatas = [
    {
        title:'新闻中心',
        contents:[
            {
                content:'遥感动态'
            },
            {
                content:'测绘动态'
            },
            {
                content:'公司动态'
            },
            {
                content:'央视新闻'
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
            },
            {
                content:'国土规划'
            },
            {
                content:'水土流失监测'
            },
            {
                content:'农业服务'
            },
            {
                content:'数据采集'
            }
        ]
    },
     {
        title:'咨询服务',
        contents:[
            {
                content:'数据处理'
            },
            {
                content:'数据获取'
            },
            {
                content:'空间规划'
            },
        ]
    },
     {
        title:'关于我们',
        contents:[
            {
                content:'主营业务'
            },
            {
                content:'公司介绍'
            },
            {
                content:'合作伙伴'
            },
        ]
    }
]
const contactInfos = [
  {
    imgSrc:wechat,
    title:'QQ群'
  },
  {
    imgSrc:QQ,
    title:'微信公众号'
  }
]

const solutions = [
  {
    imgSrc:UAV,
    otherImg:UAV,
    title:"无人机",
  },
  {
    imgSrc:WSE,
    otherImg:UAV,
    title:"水土流失监测",
  },
  {
    imgSrc:agriculture,
    otherImg:UAV,
    title:"农业服务",
  },
  {
    imgSrc:dataAcquision,
    otherImg:UAV,
    title:"数据采集",
  },
  {
    imgSrc:planning,
    otherImg:UAV,
    title:"国土规划",
  },
  {
    imgSrc:weather,
    otherImg:UAV,
    title:"气象服务",
  }
]

export default {
  name: 'Home',
  data(){
    return {
      carouselImages,
      infoDatas,
      footerDatas,
      contactInfos,
      solutions,
    }
  },
  components:{
    NewsContainer,
    FooterContent,
  },
  methods:{
    mouseEnterEvent(event){
      console.log('event',event);
    }
  },
  mounted(){
    // const ids = document.getElementsByClassName('solution_img_class');
    // ids.forEach((ele,index) => {
    //   ele.addEventListener('mouseenter',() => {
    //     ele.setAttribute('src',this.solutions[index].otherImg);
    //     ele.style.transition='0.5s';
    //   })
    // })
    // ids.forEach((ele,index) => {
    //   ele.addEventListener('mouseleave',() => {
    //     ele.setAttribute('src',this.solutions[index].imgSrc);
    //     ele.style.transition='0.5s';
    //   })
    // })
  }
};
</script>
<style lang="scss" scoped>
  .home_container{
    .first_row_container{
      background: grey;
      .carousel_image{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;  
      }
    }
    
    .second_row_container{
      
      .news_content{
        display: flex;
        justify-content: space-around;;
        padding: 0 2rem 2rem 2rem;
      }
    }
    .third_row_container{
      .solutions_group_container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0 2rem 2rem 2rem;
        text-align: center;
        .solution_container{
          padding-bottom: 1.5rem;
          .solution_title{
            color: black;
            font-size: 1.2rem;
            font-weight: bold;
          }
        }

      }
    }
    .footer_row_container{
      color: white;
      background: grey;
      padding: 1.5rem 2rem 1rem 2rem;
      display: flex;
      .contact_container{
        width: 30%;
        .contact_title{
          font-size: 1.3rem;
          color: white;
        }
        .contact_img_container{
          padding-top:1rem;
          display: flex;
          justify-content: space-evenly;
          .img_title_container{
            display: flex;
            flex-direction: column;
            .contact_img_class{
              width:100px;
              height:100px;
            }
            .img_title{
              text-align: center;
              padding-top: 0.4rem;
            }
          }
        }
      }
      

    }

   /deep/ .el-divider{
      background: grey !important;
    }

    .title_container{
        padding: 1.8rem;
        .news_title{
          font-size: 1.8rem;
          color: blue;
          }
    }
    // .solution_img_class:hover{
    //   src:UAV,
    // }

  }
  // .el-carousel__item h3 {
  //     color: #475669;
  //     font-size: 14px;
  //     opacity: 0.75;
  //     line-height: 200px;
  //     margin: 0;
  //   }
    
    // .el-carousel__item:nth-child(2n) {
    //   background-color: #99a9bf;
    //   opacity:0.2;
    // }
    
    // .el-carousel__item:nth-child(2n+1) {
    //   background-color: #d3dce6;
    //   opacity: 1;
    // }
</style>