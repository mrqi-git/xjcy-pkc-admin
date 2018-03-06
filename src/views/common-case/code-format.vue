<style lang="less">
@import '../../styles/common.less';
</style>
<template>
<div>

  <Card :bordered="false" class="margin-top-8">
    <Tabs type="card">


      <TabPane label="JSON格式化">
        <p class="float_right">
          <Button type="primary" @click="methods1">格式化</Button>
          <Button type="primary" @click="methods2">压缩</Button>
          <Button type="primary" @click="methods3">清空</Button>
        </p>
        <br class="clear">
        <Row :gutter="16">
          <Col span="12">
          <p>操作前</p>
          <p>
            <Input v-model="value1" type="textarea" placeholder='输入Json字符串：例如:
{"name":"张三","sex":"男","age":"21"}' :rows="14"></Input>
          </p>
          </Col>
          <Col span="12">
          <p>操作后</p>
          <p>
            <Input v-model="value2" type="textarea" placeholder='例如:
{
    "name": "张三",
    "sex": "男",
    "age":"21"
}' :rows="14"></Input>
          </p>
          </Col>
        </Row>
        <br>
        <Alert type="error" show-icon :style="{display:value3}">
          抱歉，此JSON格式有误，无法解析 ：
          <br>
          <Span v-html="value4"></Span>
          <br>
          <Span v-html="value5"></Span>
        </Alert>
      </TabPane>


      <TabPane label="XML格式化">
        <p class="float_right">
          <Button type="primary" @click="methods4">格式化</Button>
          <Button type="primary" @click="methods5">压缩</Button>
          <Button type="primary" @click="methods6">清空</Button>
        </p>
        <br class="clear">
        <Row :gutter="16">
          <Col span="12">
          <p>操作前</p>
          <p>
            <Input v-model="value6" type="textarea" placeholder='输入Xml字符串：例如:
<?xml version="1.0"?><note><to>Tove</to><from>forms</from><heading>这里是head</heading><body>这里是主体</body></note>' :rows="14"></Input>
          </p>
          </Col>
          <Col span="12">
          <p>操作后</p>
          <p>
            <Input v-model="value7" type="textarea" placeholder='例如:
<?xml version="1.0"?>
<note>
  <to>Tove</to>
  <from>forms</from>
  <heading>这里是head</heading>
  <body>这里是主体</body>
</note>' :rows="14"></Input>
          </p>
          </Col>
        </Row>
        <br>
        <Alert type="error" show-icon :style="{display:value8}">
          抱歉，此XML格式有误，无法解析 ：
          <br>
          <Span v-html="value9"></Span>
          <br>
          <Span v-html="value10"></Span>
        </Alert>
      </TabPane>


      
    </Tabs>
  </Card>



</div>
</template>
<script>
import customutil from '@/libs/customutil.js';
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "none",
      value4: "",
      value5: "",

      value6: "",
      value7: "",
      value8: "none",
      value9: "",
      value10: "",
    }
  },
  methods: {
    methods1() {
      //格式化
      var tempvalue = customutil.formatJson(this.value1);
      this.value3 = tempvalue.result ? "none" : "";
      this.value2 = tempvalue.result ? tempvalue.msg : "";
      this.value4 = tempvalue.result ? "" : "失败原因 ：" + tempvalue.msg.message;
      this.value5 = tempvalue.result ? "" : "失败详细 ：" + tempvalue.msg.stack;
    },
    methods2() {
      //压缩
      this.value1 = this.value2.replace(/\ +/g, "").replace(/[ ]/g, "").replace(/[\r\n]/g, "");
    },
    methods3() {
      //清空
      this.value1 = "";
      this.value2 = "";
    },
    methods4() {
      //格式化
      var tempvalue = customutil.formatXml(this.value6);
      this.value7 = tempvalue;
    },
    methods5() {
      //压缩
      this.value6 = this.value7.replace(/\ +/g, "").replace(/[ ]/g, "").replace(/[\r\n]/g, "");
    },
    methods6() {
      //清空
      this.value6 = "";
      this.value7 = "";
    },
  }
}
</script>
