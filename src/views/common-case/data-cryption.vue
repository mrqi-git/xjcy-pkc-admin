<template>
<div>

  <Card :bordered="false">
    <Tabs type="card">


      <TabPane label="Md5加密">
        <Row>
          <Col span="5">
              要加密的字符串:
          </Col>
          <Col span="14">
            <Input v-model="value1" placeholder='输入要加密的字符串'></Input>
          </Col>
          <Col span="5">
            <Button type="primary" @click="methods1">加密</Button>
          </Col>
          </Col>
        </Row>
        <br>
        <Row>
          <Col span="5">
              加密前字符串:
          </Col>
          <Col span="14">
            <span v-html="value2"></span>
          </Col>
          <Col span="5"></Col>
          </Col>
        </Row>
        <br>
        <Row>
          <Col span="5">
              16位小写加密后:
          </Col>
          <Col span="14">
            <span v-html="value3"></span>
          </Col>
          <Col span="5"></Col>
          </Col>
        </Row>
        <br>
        <Row>
          <Col span="5">
              16位大写加密后:
          </Col>
          <Col span="14">
            <span v-html="value4"></span>
          </Col>
          <Col span="5"></Col>
          </Col>
        </Row>
        <br>
        <Row>
          <Col span="5">
              32位小写加密后:
          </Col>
          <Col span="14">
            <span v-html="value5"></span>
          </Col>
          <Col span="5"></Col>
          </Col>
        </Row>
        <br>
        <Row>
          <Col span="5">
              32位大写加密后:
          </Col>
          <Col span="14">
            <span v-html="value6"></span>
          </Col>
          <Col span="5"></Col>
          </Col>
        </Row>
      </TabPane>


    </Tabs>
  </Card>



</div>
</template>
<script>
import md5 from '@/libs/md5.js';
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: ""
    }
  },
  methods: {
    methods1() {
      //格式化
      this.value2 = this.value1;
      this.value3 = md5.hex_md5_16(this.value2);
      this.value4 = md5.hex_md5_16_big(this.value2);
      this.value5 = md5.hex_md5(this.value2);
      this.value6 = md5.hex_md5_32_big(this.value2);
    }
  }
}
</script>
