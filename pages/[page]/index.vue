<template>
	<h1>This is a dynamic page for {{ params.page }}</h1>
</template>


<script setup lang="ts">
const { params } = useRoute()
</script>