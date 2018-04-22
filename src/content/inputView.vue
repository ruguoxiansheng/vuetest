<!--这个弹出框，用于查询输入的！-->
<template>
  <Table :columns="columns" :data="data"></Table>
</template>
<script>
  export default {
    props: ['data','columns'],
    data () {
      return {
        columns: [],
        data: [ ]
      }
    }
  }
</script>
