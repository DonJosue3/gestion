<script >
import SalairesView from "./views/SalairesView.vue";
export default {
  components: {
    SalairesView
  }
}
</script>

<template>
    <router-view v-if="$store.state.user!=null"></router-view>
	<SalairesView v-else></SalairesView>
</template>

<style>

</style>
