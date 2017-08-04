<template>
  <div id="shadeBox">
    <div class="shade"></div>
    <div class="shadeContent">
      <p class="shade_title">登录信息 <span v-show="writeErr">请填写完整</span></p>
      <div class="userName">
        <span>用户名：</span>
        <input type="text" v-model="username">
      </div>
      <div class="userPwd">
        <span>密&nbsp;码：</span>
        <input type="password" v-model="userpwd">
      </div>
      <div class="shade_btn">
        <button id="shade_login" @click="login">确定</button>
        <button id="shade_cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        username: '',
        userpwd: '',
        writeErr: false
      }
    },
    methods: {
      login() {
        if (!this.username || !this.userpwd) {
          this.writeErr = true
        } else {
          this.writeErr = false
          axios.post('users/login', {
            username: this.username,
            userpwd: this.userpwd
          }, (res)=> {
            console.log(res.data)
          })
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../css/modal/modal.scss";
</style>
