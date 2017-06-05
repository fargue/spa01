<template>
  <div>
    <h3 class="text-center">OPLEVDEV User Information</h3>
    <hr/>
	 <div v-if="OPLEVDEVUserData.data">
	 	<h2>Status: {{ OPLEVDEVUserData.status }}</h2>
	 	<h2>Message: {{ OPLEVDEVUserData.message }}</h2>
	 	<h2>UserName: {{ (OPLEVDEVUserData.data).user_data.username }}</h2>
	 	<h2>User Id: {{ (OPLEVDEVUserData.data).user_data.user_id }}</h2>
	 	<h2>Account Status: {{ (OPLEVDEVUserData.data).user_data.account_status }}</h2>
	 	<h2>Default Tablespace: {{ (OPLEVDEVUserData.data).user_data.default_tablespace }}</h2>
	 	<h2>Create Date: {{ (OPLEVDEVUserData.data).user_data.created }}</h2>
	 	<h2>Profile: {{ (OPLEVDEVUserData.data).user_data.profile }}</h2>
	 </div>

  </div>
</template>

<script>
import { getOPLEVDEVUserData } from '../utils/get-user-data';

export default {
  name: 'OPLEVDEVUserData',
  data() {
    return {
      OPLEVDEVUserData: '',
    };
  },
  methods: {
    getOPLEVDEVUserData() {
      getOPLEVDEVUserData().then((userdata) => {
        this.OPLEVDEVUserData = userdata;
        console.log( userdata );
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