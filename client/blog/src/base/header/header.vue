<template>
  <div id="blogHeader">
    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :span="4"></el-col>
          <el-col :span="16" id="headerMain">
            <div id="login_out" v-if="username === ''">
              <span @click="login">登陆&nbsp;/</span>&nbsp;
              <span @click="login">注册</span>
            </div>
            <div id="users" v-if="username !== ''">{{username}}</div>
            <ul>
              <li>我的文章</li>
              <li>首页</li>
            </ul>
          </el-col>
          <el-col :span="4"></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapMutations,mapGetters} from 'vuex'
  export default {
    data(){
      return {

      }
    },
    computed:{
      ...mapGetters(['username'])
    },
    methods: {
      login(){
        this.setShowModal(true)
      },
      ...mapMutations({
        setShowModal: 'SET_SHOW_MODAL'
      })
    }
  }
</script>

<style scoped lang="scss">
  #blogHeader {
    background: #20A0FF;
  }

  #login_out,#users {
    display: flex;
    align-items: center;
    color:white;
    span{
      cursor: pointer;
    }
  }

  div {
    height: 4em;
  }

  #headerMain{
    display: flex;
    ul{
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      color: white;
      li{
        display: flex;
        align-items: center;
        padding:0 2em;
        cursor: pointer;
        height:100%;
        &:hover{
           background: #13CE66;
         }
      }
      /*li:first-child {*/
        /*padding-right:0;*/
      /*}*/
    }
  }
</style>
