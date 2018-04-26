<template>
  <Form>
  <FormItem v-for="(value, key) in items" :label="key" >
    <input :value="value" ></input>
  </FormItem>
  </Form>
</template>


<script>
  export default {
    props: ['items'],
    data () {
      return {
        items :{}
      }
    }
  }
</script>

<style scoped>
</style>
