<template>
  <Form  ref="formInline" :model="formInline" :rules="ruleInline" label-position="left" :label-width="80" style="width:250px;margin-left: auto;margin-right: auto" >
    <FormItem prop="user" label="手机号：">
      <Input type="text" v-model="formInline.user" placeholder="手机号">
      </Input>
    </FormItem>
    <FormItem prop="password"  label="密码：" >
      <Input type="password" v-model="formInline.password" placeholder="密码">
      </Input>
    </FormItem>
    <FormItem prop="identifyCode"  label="验证码：">
      <Input type="text" v-model="formInline.identifyCode" placeholder="验证码">
      </Input>
    </FormItem>
    <FormItem >
      <Button type="primary" @click="handleSubmit('formInline')">注册</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          identifyCode : "",
          password: ''
        },

        ruleInline: {
          user: [
            { required: true, message: '请输入用户手机号.....', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码....', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>
