<template>
  <div
    :class="{ backdrop: true, active: isActive }"
    @click="toggleSidebar"
  ></div>
  <div class="minibar nav-bg">
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
  <div class="sidebar nav-bg" :class="{ active: isActive }">
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
  props: ["darkMode"],
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    logoExtension() {
      return this.darkMode ? "d" : "l";
    },
  },
  methods: {
    toggleSidebar() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
/* backdrop */
.backdrop {
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
}

.backdrop.active {
  visibility: visible;
}

/* common elements sidebar/minibar */

ul {
  list-style: none;
  padding-left: 0;
  overflow: hidden;
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
  background: rgb(131, 131, 131);
  color: white;
}

/* minibar */

.minibar {
  z-index: 990;
  position: fixed;
  left: 0;
  height: 100%;
  width: 50px;
  padding-left: 0px;
}

.minibar ul li {
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  padding-left: 10px;
  font-size: 16pt;
}

/* sidebar */

.sidebar {
  z-index: 999;
  position: fixed;
  left: 0;
  height: calc(100% - 75px);
  width: 205px;
  transition: transform 500ms ease-out;
  transform: translateX(-100%);
  overflow-y: scroll;
}

.sidebar ul li {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  height: 100px;
  width: 100%;
  padding-left: 10px;
  font-size: 16pt;
}

.sidebar.active {
  transform: translateX(0);
}

.sidebar::-webkit-scrollbar {
  width: 5px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent !important;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #bbbbbb;
  border-radius: 10px;
}

@media screen and (max-width: 750px) {
  .sidebar.active {
    transform: translateX(-100%);
  }

  .backdrop.active {
    visibility: hidden;
  }
}

#sidebar-toggle {
  padding-left: 10px;
  transform: translateY(35%);
  font-size: 16pt;
  height: 75px;
  cursor: pointer;
}

#logo {
  float: right;
  padding-right: 15px;
  max-height: 75px;
}

.sidebar.active #sidebar-toggle {
  left: 80%;
}

.link-name {
  text-align: right;
  padding-right: 20px;
  color: inherit;
}

/* tooltip */

.tooltip {
  font-size: 12pt;
  color: black;
  position: absolute;
  text-align: center;
  padding-top: 10px;
  left: 60px;
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
