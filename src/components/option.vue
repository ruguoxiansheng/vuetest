<template>
  <Row >
    <Col span="12">
      <Form  :rules="ruleValidate" :label-width="100" style="width: 300px">

      <FormItem label="开标时间：">
          <FormItem >
            <DatePicker  type="date" style="width: 200px" placeholder="Select date" v-model="date"></DatePicker>
          </FormItem>
      </FormItem>

      <FormItem label="项目编号：">
        <Select v-model="city" placeholder="Select your city">
          <Option v-for="item in projectNumber" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem v-for="(value, key) in items" :label="key" >
        <Input :value="value" ></Input>
      </FormItem>
      </Form>
    </Col>
    <Col span="12">
    <Form  :rules="ruleValidate" :label-width="100" style="width: 300px">
      <FormItem label="公司名称：" prop="companyName">
        <Input v-model="companyName" placeholder="输入公司名称...."></Input>
      </FormItem>
      <FormItem label="公司报价：" prop="companyValueValid">
        <Input v-model="companyValue" placeholder="输入公司报价...."></Input>
      </FormItem>

      <FormItem label="单位：">
        <Select v-model="defaultUnit" placeholder="Select your city">
          <Option v-for="item in unit" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="reEnter">确认报价</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="queryInput">查询输入</Button>
        <Button type="primary" @click="calTender">计算标底</Button>
      </FormItem>

  </Form>
    </Col>
  </Row>
</template>
<script>
  import inputEdit from '@/content/inputEdit.vue';
  export default {
    data() {
      return {
        inputObj :{},// 存入对象数据
        companyName: '',
        companyValue: '',
        defaultUnit: '万元',
        date: '',
        projectNumber: [
          {
            value: '皖E20180420-1',
            label: '皖E20180420-1'
          },
          {
            value: '皖E20180420-2',
            label: '皖E20180420-2'
          }
        ],
        unit: [
          {
            value: '元',
            label: '元'
          },
          {
            value: '万元',
            label: '万元'
          },
          {
            value: '千万元',
            label: '千万元'
          }
        ],
        items: {
          x: 0,
          y: 0,
          z: 0
        },
        ruleValidate: {
          companyName: [
            {required: true, message: '公司名称不能为空，也不能重复！', trigger: 'blur'}
          ],
          companyValueValid: [
            {required: true, message: '公司报价格式不对！', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {

      //  记录所有的输入到inputObj
      reEnter() {
        this.inputObj[this.companyName] = this.companyValue;
        this.companyValue='';
        this.companyName='';
        this.$Message.success('输入成功，请继续.....');

      },
      // 弹出输入的价格
      queryInput() {
        const _this = this;
        this.$Modal.info({
          render: (h) => {
            return h(inputEdit, {
              props: {
                items: _this.inputObj
              }
            })
          }
        })
      },

      // 计算标底的方法
      calTender() {
        const _this = this;
        let url = 'http://127.0.0.1:8077/vue/calTender';
        let params = {
          data: this.inputObj
        };
        this.$http.post(url, params).then(function (response) {
          if (response.status === 200) {
            //axions 中如果用this 就会undefined
            _this.data1 = response.data.pageData;
            _this.dataCount = response.data.totalSize;
          }
          console.log(response.data.message);
        })
          .catch(function (error) {
            console.log(error);
            _this.instance('error', error);
          });
      }

    }// end of methods
  }
</script>
