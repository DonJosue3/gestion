<script >
import LoginView from "./components/LoginView.vue"
import SalairesView from "./views/SalairesView.vue";
import ListeEmployes from "./views/ListeEmployes.vue";

</script>

<template>
    <router-view v-if="$store.state.user!=null"></router-view>
	<SalairesView v-else></SalairesView>
</template>

<style>

</style>
