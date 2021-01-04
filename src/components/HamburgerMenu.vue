<template>
  <div class="nav">
    <input type="checkbox" class="nav-checkbox" id="nav-toggle">

    <label for="nav-toggle" class="nav-button">
      <span class="nav-icon">&nbsp;</span>
    </label>

    <div class="nav-background"></div>

    <nav class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-menu-item"><router-link to="/my-board" class="nav-link">My Board</router-link></li>
        <li class="nav-menu-item"><router-link to="/team-board" class="nav-link">Team Board</router-link></li>
        <li class="nav-menu-item"><router-link to="/backlog" class="nav-link">Backlog</router-link></li>
        <li class="nav-menu-item"><router-link to="/" class="nav-link">Log Out</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu'
}
</script>
