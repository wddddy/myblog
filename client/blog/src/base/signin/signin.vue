<template>
  <div id="blogSignIn">
    <div id="signIn_shade" @click="close"></div>
    <div id="signIn_main">
      <el-form :label-position="labelPosition" label-width="6em">
        <el-form-item label="输入名称：">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="输入密码：">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <div id="signInBtn">
          <el-button size="small" @click="close">取消</el-button>
          <el-button size="small" @click="login">确认</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        labelPosition: 'right',
        username:'',
        password:''
      }
    },
    methods:{
      login(){
        if(!this.username || !this.password){
          alert('请输入完整！！！')
        }else {
          this.$axios.post('users/login', {
            username: this.username,
            password: this.password
          }).then(res => {
            console.log(res.data)
            let result = res.data;
            if(result.status === 0) {
              alert('请输入正确的用户名或密码！！！')
            }else {
              console.log(this.username)
              this.setUserName(result.msg.username)
              this.setShowModal(false)
            }
          })
        }
      },
      close(){
        this.setShowModal(false)
      },
      ...mapMutations({
        setShowModal:'SET_SHOW_MODAL',
        setUserName:'SET_USER_NAME'
      })
    }
  }

</script>

<style scoped lang="scss">
  #signInBtn {
    display: flex;
    flex-direction: row-reverse;
    button {
      margin-left: 2em;
    }
  }
  #blogSignIn {
    position: absolute;
    width: 100%;
    height: 100%;
    #signIn_shade{
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    #signIn_main {
      position: absolute;
      border-radius: 1em;
      width: 25%;
      height: 30%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background: #eef1f6;
      z-index:2;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
