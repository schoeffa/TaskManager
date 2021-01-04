<template>
  <ul>
    <li v-for="filteredTask in tasks.filter((task) => this.$store.state.user === task.assignedTo && task.status === cat)" :key="filteredTask.title" class="task">
      <task v-bind:task="filteredTask"></task>
    </li>
  </ul>
</template>

<script>
import Task from "@/components/Task";

export default {
  name: 'TaskList',
  components: {
    Task,
  },
  data: function() {
    return {
      tasks: [
        {
          title: 'Wash Dishes',
          frequency: 'Daily',
          assignedTo: 'Aaron',
          status: 'To Do'
        },
        {
          title: 'Vacuum',
          frequency: 'Weekly',
          assignedTo: 'Aaron',
          status: 'To Do'
        },
        {
          title: 'Mow the Lawn',
          frequency: 'Weekly',
          assignedTo: 'Aaron',
          status: 'To Do'
        },
      ]
    }
  },
  props: ['cat']
}
</script>