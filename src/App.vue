<script>
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useRoute, useRouter } from "vue-router";
//首先在setup中定义
const router = useRouter()
const route = useRoute()
export default defineComponent({
  components: {
        ElConfigProvider,
      },
      setup() {
        return {
          zIndex: 3000,
          size: 'small',
        }
      },
  methods:{
    goPage(){
      router.push({path: '/sidebar'})
    }
  }
    }
)

</script>
<template>
  <RouterView />
</template>
<style >

html,body,#app {
  height: 100%;
}
</style>
