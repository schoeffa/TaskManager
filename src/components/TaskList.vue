<template>
  <ul>
    <li
        v-for="filteredTask in tasks.filter((task) => this.$store.state.user === task.assignedTo && task.status === cat)"
        @click="_setActiveTask(filteredTask)"
        :key="filteredTask.title"
        :class="_isActiveTask(filteredTask) ? 'task-active' : ''"
        class="task"
    >
      <task :title="filteredTask.title"
            :frequency="filteredTask.frequency"
            :assignedTo="filteredTask.assignedTo"
            :status="filteredTask.status"
      ></task>
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
      ],
      activeTask: null
    }
  },
  props: ['cat'],
  methods: {
    _isActiveTask: function(task) {
      return task === this.activeTask;
    },
    _setActiveTask: function(task) {
      this.activeTask = task;
    }
  }
}
</script>