<template>
  <div id="blogMain">
    <el-row>
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="5">
            <ul>
              <li v-for="item in list">{{item}}</li>
            </ul>
          </el-col>
          <el-col :span="19">

          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  data(){
    return {
      list:['推荐','前端','android','ios','后端']
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  #blogMain {
    flex: 1;
    background: #eef1f6;
  }
  div {
    height:100%;
  }
  ul {
    height: 100%;
    border-right:1px solid #ddd;
    li{
      color: #48576a;
      height:3em;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding-left:1em;
      &:hover {
         background: #d1dbe5;
       }
    }
  }
</style>
