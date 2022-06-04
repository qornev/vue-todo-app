<template>
  <transition-group name="fade">
    <v-card
      v-for="ToDo in ToDos"
      :key="ToDo.id"
      class="mx-auto pa-3 ma-3"
      max-width="500"
      elevation="4"
    >
      <v-row class="d-flex justify-space-between">
        <v-cols cols="8">
          <v-card-title
            class="my-2 overflow-hidden"
            max-width="100px"
          >
            {{ ToDo.name }}
          </v-card-title>
        </v-cols>
        <v-cols cols="4">
          <v-card-actions>
            <v-btn
              icon
              elevation="0"
              @click="deleteToDo(ToDo.id)"
            >
              <v-icon color="green">
                mdi-check
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-cols>
      </v-row>
    </v-card>
  </transition-group>
</template>

<script>
import { db } from '../plugins/firebase';
import { collection, doc, deleteDoc, onSnapshot } from 'firebase/firestore';

export default {
  name: "ToDoList",
  data() {
      return {
          ToDos: []
      }
  },
  created() {
    onSnapshot(
      collection(db, "ToDos"),
      (snapshot) => {
        let docs = [];
        snapshot.docs.forEach(doc => {
          docs.push({id: doc.id, name: doc.data().name})
        });
        this.ToDos = docs;
      });
  },
  methods: {
    deleteToDo(id) {
      deleteDoc(doc(db, "ToDos", id));
    }
  }
}
</script>

<style>
.v-card-title {
  max-width: 300px;
}
</style>