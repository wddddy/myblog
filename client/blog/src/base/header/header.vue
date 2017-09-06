<template>
  <div id="blogHeader">
    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :span="4"></el-col>
          <el-col :span="16" id="headerMain">
            <div id="login_out"><span>登陆&nbsp;/</span>&nbsp;<span>登出</span></div>
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

  export default {}
</script>

<style scoped lang="scss">
  #blogHeader {
    background: #20A0FF;
  }

  #login_out {
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
    }
  }
</style>
