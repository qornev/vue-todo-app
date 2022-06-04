<template>
  <v-app-bar
    app
    elevation="0"
    color="indigo"
  >
    <v-toolbar-title>ToDo App</v-toolbar-title>

    <v-spacer />

    <v-btn
      icon
      @click="overlay = !overlay"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-overlay
      v-model="overlay"
      class="align-center justify-center"
    >
      <v-card
        class="mx-auto"
        width="300"
      >
        <v-card-actions>
          <v-text-field
            v-model="newItem"
            hide-details
            label="Enter what you want to do"
            outlined
          />
          <v-btn @click="addItem">
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-app-bar>
</template>

<script>
import { db } from '../plugins/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default {
  name: 'AppBar',
  data() {
    return {
      overlay: false,
      newItem: ""
    }
  },
  methods: {
    async addItem() {
      if (this.newItem) {
        const docRef = await addDoc(collection(db, "ToDos"), {
          name: this.newItem
        });
        console.log("Document written with ID: " ,docRef.id);
        this.newItem = "";
        this.overlay = false;
      }
    }
  }
}
</script>