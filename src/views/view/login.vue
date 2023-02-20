
  <template>
    <div class="bg">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Login</span>
            <el-button class="button" text>Operations</el-button>
          </div>
        </template>

        <el-form
            ref="formRef"
            :model="loginForm"
            label-width="100px"
            class="demo-ruleForm"
        >


          <el-form-item
              label="account"
              prop="account"
              :rules="[
        { required: true, message: 'account is required' },
      ]"
          >
            <el-input
                v-model="loginForm.account"
                type="text"
                autocomplete="off"
            />
          </el-form-item>



          <el-form-item
              label="password"
              prop="password"
              :rules="[
        { required: true, message: 'age is required' },
      ]"
          >
            <el-input
                v-model="loginForm.password"
                type="password"
                autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
            <el-button @click="resetForm(formRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>




  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance } from 'element-plus'

  const formRef = ref<FormInstance>()

  const loginForm = reactive({
    account: '',
    password: '',
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>
  <style lang="scss" scoped>
  .bg{
    width: 100%;
    height: 100%;
    background:linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);
  }
  .card-header {
    display: flex;

    justify-content: space-between;
    align-items: center;

  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    position: absolute;
    border-radius: 20px;
    margin: auto;
    width: 480px;
    height: 400px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //高斯模糊
    backdrop-filter: blur(15px);
    //不透明度0-1，0就完全透明了
    opacity: 0.6;
    //背景高斯模糊
    //filter: blur(15px);
  }
  </style>