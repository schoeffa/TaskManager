<template>
  <input type="checkbox" class="task-checkbox" v-model="open" id="task-checkbox">
  <label for="task-checkbox"> {{ task.title }}
  </label>
  <div class="task-card" v-bind:class="{ 'task-card-open' : open }">
    <span class="material-icons minimize-card" @click="_toggleCard">close</span>
    <div class="task-card-background"></div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  data: function() {
    return {
      open: false
    }
  },
  methods: {
    _toggleCard() {
      this.open = !this.open;
    }
  },
  props: ['task'],
}
</script>