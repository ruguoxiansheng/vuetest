<template>
  <div>
    <Table border ref="selection" :columns="columns4" :data="data1" height="400"></Table>
    <Page :total="dataCount" :page-size="pageSize" show-total  @on-change="changepage"></Page>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [ ],
        dataCount:0
      }
    },
    methods :{
      query () {
        const _this = this;
        let url= 'http://127.0.0.1:8077/vue/option1';
        let params = {
        };
//        this.$http.post(url, params).then(response => {
//          this.data1=response.data.pageData;
//          this.dataCount=response.data.totalSize;
//        });

//        this.$http.post(url,params).then(function (response) {
//          this.data1=response.data.pageData;  //处理后台返回的数据
//          this.dataCount=response.data.totalSize;
//        }).catch(function(error){
//            console.log(error.response.data.message);
//
//          });
        this.$http.post(url,params).then(function (response) {
          if (response.status === 200) {
            //axions 中如果用this 就会undefined
            _this.data1=response.data.pageData;
            _this.dataCount=response.data.totalSize;
          }
          console.log(response.data.message);
        })
      .catch(function (error) {
        console.log(error);
      });
      }
    },
  created: function () {
    this.query();
  }
  }
</script>
