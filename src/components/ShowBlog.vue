<template>
  <div class="showblog">
      <div class="list" >
          <div class="item" v-for="item in blogArr" :key="item.id">
              <div class="top">
                  <div class="title">{{item.title}}</div>
                  <div class="time">{{meDate(item.posttime)}}</div>
              </div>
              <div class="center">
                  {{item.content}}
              </div>
              <div class="bottom">
                  <div class="classify">分类：<span>{{item.classify}}</span></div>
                  <div class="author">作者：<span>{{item.author}}</span></div>
              </div>
          </div>
      </div>
      <div class="page">

          <div @click="clickFirst">上一页</div>
          <p>第{{p}}页</p>
          <div @click="clickNext">下一页</div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import commons from '@/assets/js/commons'
console.log(commons.myDate('1618386040', 5))
export default {
  data () {
    return {
      blogArr: [],
      p: 1
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    // 修改时间格式
    meDate (val) {
      return commons.myDate(val, 5)
    },

    // 点击上一页
    clickFirst () {
      if (this.p <= 1) {
        alert('已经是第一页了')
        return
      }
      this.p--
      this.getData(this.p)
      this.goScrollTop()
    },
    // 点击下一页
    clickNext () {
      if (this.blogArr.length < 9 || this.blogArr.length == 0) {
        alert('后面没有更多了')
        return
      }
      this.p++
      this.getData(this.p)
      this.goScrollTop()
    },

    // 返回顶部的函数
    goScrollTop () {
      if (document.body.scrollTop) {
        document.body.scrollTop()
      } else {
        document.documentElement.scrollTop = 0// 回到顶部
      }
    },
    // 获取网络请求
    getData (page = 1) {
      axios({
        url: 'https://ku.qingnian8.com/dataApi/blog/showBlog.php',
        params: {
          page: page// 页面
        }
      }).then(res => {
        console.log(res.data)
        this.blogArr = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.showblog{
    min-height: 500px;
    .list{
        padding: 40px;
        .item{
            margin-bottom: 40px;
            .top{
                display: flex;
                justify-content: space-between;
                .title{
                    font-size: 26px;
                    color: #333;
                }
                .time{
                    font-size: 18px;
                    color: #666;
                }
            }
            .center{
                margin: 15px 0 ;
                background: #f6f6f6;
                padding: 20px;
                border-radius: 3px;
            }
            .bottom{
                font-size: 14px;
                color: #999;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    font-size: 16px;
                    color: #666;
                }
            }
        }
    }
    .page{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
        div{
            padding: 10px 20px;
            border: #41B883 solid 1px;
            margin: 0 10px;
            color: #41B883;
            font-size: 14px;
            cursor: pointer;//鼠标移上变成小手
            transition: 0.3s;
            &:hover{//&代表父级本身
                background:#41B883 ;
                color: #fff;
            }
        }

    }
}
</style>
