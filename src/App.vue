<template>
  <v-app>
    <AppBar />
    
    <v-main>
      <ToDoList />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import ToDoList from './components/ToDoList.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    ToDoList
  },
  data: () => ({
    //
  }),
}
</script>
