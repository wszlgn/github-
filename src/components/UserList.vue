<template>
  <div>
    <div class="row">
      <!-- 用户展示 -->
      <div class="card" v-for="user in users" :key="user.id">
        <a class="wrap-img" :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" alt />
        </a>
        <p>{{user.login}}</p>
      </div>
      <!-- 第一次展示 -->
      <h1 v-show="infoObj.firstInfo">欢迎使用！</h1>
      <!-- 加载中展示 -->
      <h1 v-show="infoObj.loadingInfo">加载中...</h1>
      <!-- 展示错误信息 -->
      <h1>{{infoObj.errorInfo}}</h1>
    </div>
  </div>
</template>
// 


<script>
import axios from "axios";
export default {
  name: "UserList",
  data() {
    return {
      users: [],
      infoObj: {
        firstInfo: true,
        loadingInfo: false,
        errorInfo: ""
      }
    };
  },
  methods: {
    getUserDataList(parameter) {
      this.infoObj.firstInfo = false;
      this.infoObj.loadingInfo = true;
      axios.get(`https://api.github.com/search/users?q=${parameter}`).then(
        response => {
          console.log("请求成功!获取到了数据", response.data);
          this.infoObj.loadingInfo = false;
          this.users = response.data.items;
        },
        error => {
          console.log("请求失败了", error.message);
          this.infoObj.loadingInfo = false;
          this.users=[];
          this.infoObj.errorInfo = error.message;
        }
      );
    }
  },
  mounted() {
    this.$bus.$on("getUserDataList", this.getUserDataList);
  },
  beforeDestroy() {
    this.$off("getUserDataList");
  }
};
</script>
    
<style scoped>
.row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  flex-wrap: wrap;
}
.row .card {
  width: 120px;
  height: 120px;
  margin: 5px;
  display: flex;
  flex-direction: column;
}
.row .card:hover {
  box-shadow: 3px 1px 5px pink;
}
.row .wrap-img {
  height: 90%;
}
.row p {
  height: 10%;
}
.row .wrap-img > img {
  width: 100%;
  height: 100%;
}
.row div p {
  text-align: center;
  color: #000;
  font-size: 12px;
  font-family: "宋体";
}
</style>