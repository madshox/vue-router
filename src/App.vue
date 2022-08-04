<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="navbar">
          <div class="container">
            <div class="navbar-content">
              <div class="logo">VUE-CLI</div>
              <ul class="navbar-list">
                <li class="navbar-item">
                  <a href="" class="navbar-link">Example</a>
                </li>
                <li class="navbar-item">
                  <a href="" class="navbar-link">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <router-view></router-view>

      <!-- <footer></footer> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
