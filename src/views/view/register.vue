
<template>
  <div class="bg">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>新鲜热乎的注册界面</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
      >
        <el-form-item label="nick name" prop="name">
          <el-input v-model="ruleForm.name" type="input" />
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="Age" prop="age">
          <el-input v-model.number="ruleForm.age" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Submit</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>




<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import require, {request} from '../../request/request.js'
const ruleFormRef = ref<FormInstance>()



const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  name:'',
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      request.get('/login',formEl.$data).then(res=>{
        console.log("ok")
      }).then(error=>{
        console.log( "sonme error")
      })
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