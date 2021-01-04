<template>
    <div class="user-select">
      <h3 class="user-select-header">Select User</h3>
      <ul class="users-list">
        <li v-for="user in users" :key="user" @click="this.$store.commit('setUser', user)" class="user-list-item">
          <router-link to="/my-board" class="user" v-bind:name="user"> {{ user }} </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'UserSelect',
  data: function() {
    return {
      users: this.$store.state.users,
    }
  },
}
</script>
