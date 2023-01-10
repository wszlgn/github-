<template>
  <section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyWord"/>
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            keyWord: '',
        }
    },
    methods: {
        searchUsers() {
            this.$bus.$emit('getUserDataList', this.keyWord);
        }
    }
}
</script>

<style scoped>
    .jumbotron {
        width: 100%;
        text-align: center;
        margin:20px auto;
        padding-top: 10px;
    }
    .jumbotron button {
        margin: 5px;
    } 
</style>