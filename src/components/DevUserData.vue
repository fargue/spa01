<template>
  <div>
    <h1 class="text-center">OPLEVDEV User Information</h1>
    <form v-on:submit.prevent="getOPLEVDEVUserData">
      <input v-model="username" placeholder="Enter Oracle User Name"/>
    </form>
    <hr/>
	 <div v-if="OPLEVDEVUserData.data">
	 	<h2>Status: {{ OPLEVDEVUserData.status }}</h2>
	 	<h2>Message: {{ OPLEVDEVUserData.message }}</h2>
	 	<h2>User Message: {{ OPLEVDEVUserData.data.user_message }}</h2>
	 	<h2 v-for="userx in (OPLEVDEVUserData.data.user_data.user)">
	 		{{ userx.username }},
	 		{{ userx.user_id }},
	 	</h2>
	 	<h3>Data is {{OPLEVDEVUserData.data.user_data.user[0]}}</h3>
	 </div>

  </div>
</template>

<script>
import { getOPLEVDEVUserData } from '../utils/get-user-data';

export default {
  name: 'OPLEVDEVUserData',
  data() {
    return {
      username: '',
      OPLEVDEVUserData: '',
    };
  },
  methods: {
    getOPLEVDEVUserData() {
      
    	   getOPLEVDEVUserData(this.username).then((userdata) => {
   	     this.OPLEVDEVUserData = userdata;
      	  console.log(userdata);
      	});
    },
  },
  mounted() {
    this.getOPLEVDEVUserData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>