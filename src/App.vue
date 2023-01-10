<template>
  <div id="app">
    <div class="container">
      <Search/>
		  <UserList/>
    </div>
  </div>
</template>

<script>
import Search from './components/Search'
import UserList from './components/UserList'
export default {
  name: 'App',
  components: {
    Search,
    UserList
  }
}
</script>

<style>
div,html,body,p {
  margin: 0;
  padding: 0;
}
.container {
  width: 60%;
  min-width: 245px;
  height: auto;
  /* box-shadow: 3px 3px 15px rgb(121, 121, 209); */
  margin: 20px auto;
}
</style>
