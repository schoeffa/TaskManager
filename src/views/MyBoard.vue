<template>
  <div class="my-board-wrapper">
    <ul class="category-link-list">
      <li v-for="category in categories"  :key="category" @click="changeCategory(category)" class="category-link-item">
        <button type="button" class="category-link-button" v-bind:cat="category" v-bind:class="_isActiveCat(category) ? 'active-category {category}' : ''"  >
          {{ category }}
        </button>
      </li>
    </ul>
    <task-list class="task-list" :cat="activeCategory"></task-list>
    <hamburger-menu></hamburger-menu>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import HamburgerMenu from "@/components/HamburgerMenu";

export default {
  name: 'MyBoard',
  components: {
    TaskList,
    HamburgerMenu
  },
  data: function() {
    return {
      activeCategory: 'To Do',
      categories: ['To Do', 'In Progress', 'Done']
    }
  },
  methods: {
    changeCategory(category) {
      this.activeCategory = category;
    },

    _isActiveCat(category) {
      return category === this.activeCategory;
    }
  }
}
</script>