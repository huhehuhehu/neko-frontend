<template>
  <div
    :class="{ backdrop: true, active: isActive }"
    @click="toggleSidebar"
  ></div>
  <div class="minibar">
    <ul class="nav-list">
      <router-link to="/">
        <li>
          <i class="fa fa-home fa-fw"></i>
          <span class="tooltip">HOME PAGE</span>
        </li>
      </router-link>
      <router-link to="/search">
        <li>
          <i class="fa fa-search fa-fw"></i>
          <span class="tooltip">SEARCH PAGE</span>
        </li>
      </router-link>
      <router-link to="/reorder">
        <li>
          <i class="fa fa-sort fa-fw"></i>
          <span class="tooltip">REORDER</span>
        </li>
      </router-link>
      <router-link to="/scroll">
        <li>
          <i class="fa fa-arrows-v fa-fw"></i>
          <span class="tooltip">SCROLL VIEW</span>
        </li>
      </router-link>
      <router-link to="/paged">
        <li>
          <i class="fa fa-arrows-h fa-fw"></i>
          <span class="tooltip">PAGINATION</span>
        </li>
      </router-link>
      <router-link to="/add">
        <li>
          <i class="fa fa-plus-circle fa-fw"></i>
          <span class="tooltip">ADD MASTAHPIS</span>
        </li>
      </router-link>
    </ul>
  </div>
  <div :class="{ sidebar: true, active: isActive }">
    <span class="btn" @click="toggleSidebar">
      <i class="fa fa-bars fa-fw" id="btn"></i>
    </span>
    <img id="logo" src="@/assets/logo-l.png" />
    <ul class="nav-list">
      <router-link to="/">
        <li>
          <i class="fa fa-home fa-fw"></i>
          <span class="link-name">HOME</span>
        </li>
      </router-link>
      <router-link to="/search">
        <li>
          <i class="fa fa-search fa-fw"></i>
          <span class="link-name">SEARCH</span>
        </li>
      </router-link>
      <router-link to="/reorder">
        <li>
          <i class="fa fa-sort fa-fw"></i>
          <span class="link-name">REORDER</span>
        </li>
      </router-link>
      <router-link to="/scroll">
        <li>
          <i class="fa fa-arrows-v fa-fw"></i>
          <span class="link-name">SCROLL</span>
        </li>
      </router-link>
      <router-link to="/paged">
        <li>
          <i class="fa fa-arrows-h fa-fw"></i>
          <span class="link-name">PAGED</span>
        </li>
      </router-link>
      <router-link to="/add">
        <li>
          <i class="fa fa-plus-circle fa-fw"></i>
          <span class="link-name">ADD</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.minibar {
  z-index: 990;
  position: fixed;
  left: 0;
  height: 100%;
  width: 50px;
  padding-left: 0px;
  /* padding-top: 20px; */
  background: rgb(5, 142, 170);
  background: linear-gradient(
    160deg,
    rgba(5, 142, 170, 1) 0%,
    rgba(35, 221, 172, 1) 100%
  );
}

.backdrop {
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  /* transition: all 3s ease-in; */
}

.backdrop.active {
  visibility: visible;
}

ul {
  list-style: none;
  padding-left: 0;
  /* padding-top: 30px; */
  overflow: hidden;
}

li {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  /* position: relative; */
  height: 100px;
  width: 100%;
  padding-left: 10px;
  font-size: 16pt;
  color: pink;
  transition: all 500ms ease;
}

a,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  font-weight: bold;
  color: inherit;
}

li:hover {
  background: rgb(55, 99, 156);
  color: white;
  /* font-size: 24pt; */
}

.link-name {
  text-align: right;
  padding-right: 20px;
  color: inherit;
  transition: all 300ms ease;
}

.sidebar {
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 0px;
  height: 100%;
  width: 200px;
  /* padding-top: 20px; */
  transition: all 500ms ease-in;
  background: rgb(5, 142, 170);
  background: linear-gradient(
    160deg,
    rgba(5, 142, 170, 1) 0%,
    rgba(35, 221, 172, 1) 100%
  );
  /* visibility: hidden; */
  transform: translateX(-100%);
}

.sidebar.active {
  transform: translateX(0);
}

#btn {
  padding-left: 10px;
  transform: translateY(35%);
  color: pink;
  font-size: 16pt;
  height: 75px;
}

#btn:hover {
  cursor: pointer;
}

#logo {
  float: right;
  padding-right: 15pt;
  max-height: 75px;
}

.sidebar.active #btn {
  left: 80%;
}

.tooltip {
  font-size: 12pt;
  color: black;
  position: absolute;
  text-align: center;
  padding-top: 10px;
  transform: translateY(25px);
  left: 50px;
  border-radius: 10px;
  height: 35px;
  width: 200px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  visibility: hidden;
}

.sidebar.active .tooltip {
  visibility: hidden;
}

li:hover .tooltip {
  visibility: visible;
}
</style>
