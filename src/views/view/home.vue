<template>

  <div class="common-layout">
    <el-container>
      <sidebar class="side"></sidebar>
      <el-container>
        <navbar></navbar>
        <div class="contioner">
          <router-view #default="{ Component }">
            <transition name="fade" enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut">
              <component :is="Component" />
            </transition>
          </router-view>

        </div>
      </el-container>
    </el-container>
  </div>



</template>

<script>
import sidebar from "@/components/bar/sidebar.vue";
import navbar from "@/components/bar/navbar.vue";
import Sidebar from "@/components/bar/sidebar.vue";
export default {
  name: "home",
  components: {Sidebar}
}
</script>

<style scoped>
.side{
  position: fixed;
  width: auto;
  height: calc(100% - 60px);
  top:60px
}
.contioner{
  position: fixed;
  height: calc(100% - 60px);
  top:60px;
  background-color: #ffd1ff;
}

</style>