<template>
  <input type="checkbox" class="task-checkbox" v-model="open" id="task-checkbox">
  <label for="task-checkbox"> {{ task.title }}
  </label>
  <div class="task-card" v-bind:class="{ 'task-card-open' : open }">
    <span class="material-icons minimize-card" @click="_toggleCard">close</span>
    <div class="task-card-background"></div>
    <div class="task-data">
      <p class="task-data-title">{{ task.title }}</p>
      <p class="task-data-frequency">{{ task.frequency }}</p>
      <p class="task-data-assignee">{{ task.assignedTo }}</p>
      <p class="task-data-status">{{ task.status }}</p>
    </div>
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