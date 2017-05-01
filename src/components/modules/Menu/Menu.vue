<template>
  <div class="list">
    <!--删除及查询条件 start-->
    <el-col :span="20" class='actions-top'>
      <el-button type='danger' icon='delete'
                 :disabled='batchFlag'
                 @click='onDelete(true)'>删除选中
      </el-button>

      <el-form :inline="true" :model='search_data' class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="标题" v-model='search_data.title'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click='onSearch'>查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--删除及查询条件 end-->
    <el-col :push="3" :span="21" class='actions-top'>
      <el-table border style="width: 100%" align='center'
                :data='data'
                @selection-change='handleSelectionChange'>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="日期"
          width="180">
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag>{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="160"
          :context="_self">
          <template scope='scope'>
            <el-button
              type="info"
              icon='view'
              size="mini"
              @click='onSelect(scope.row)'></el-button>
            <el-button
              type="info"
              icon='edit'
              size="mini"
              @click='onEdit(scope.row)'></el-button>
            <el-button
              type="danger"
              icon='delete'
              size="mini"
              @click='onDelete(scope.row,scope.$index,data)'></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页开始-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="paginations.currentPage"
        :page-sizes="paginations.pageSizes"
        :page-size="paginations.pageSize"
        :layout="paginations.layout"
        :total="paginations.total">
      </el-pagination>
      <!--分页结束-->
    </el-col>

    <el-dialog title="收货地址" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="120">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="120">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <!--    <el-col :span="24" class='btm-action'>

        </el-col>-->
    <!--    <el-dialog size="small"
                   :title="dialog.article_info.title"
                   v-model="dialog.show"
                   @close='onCloseView'>
          <div v-html="dialog.article_info.content"></div>
          &lt;!&ndash;  <span slot="footer" class="dialog-footer">
              <el-button @click="dialog.show = false">取 消</el-button>
              <el-button type="primary" @click="dialog.show = false">确 定</el-button>
          </span> &ndash;&gt;
        </el-dialog>-->
  </div>

</template>

<script>
  export default {
    name: 'menu',
    created:function () {
      this.getDataList();
    },
    computed: {
      batchFlag(){
          return !this.multipleSelection.length>0;
      }
    },
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        dialogFormVisible: true,//dialog 隐藏与否
        batch_flag: true, //符合批量删除为true,否则为false:
        data: [],
        multipleSelection: [],//多选
        search_data: {
          title: ''
        },
        //需要给分页组件传的信息
        paginations: {
          currentPage: 1,
          total: 0,
          pageSize: 12,
          pageSizes: [3, 9, 12, 24],
          layout: "total, sizes, prev, pager, next, jumper"
        },
      }
    },
    methods: {
      onDelete(){

      },
      onEdit(){

      },
      onSelect(){

      },
      /**
       * 搜索
       */
      onSearch() {
        this.getDataList();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        this.paginations.pageSize = val;
        this.getDataList();
      },
      handleCurrentChange(val) {
        this.paginations.currentPage = val;
        this.getDataList();
      },
      /**
       * 获取列表数据
       */
      getDataList(){
        let data = {
          page: this.paginations.currentPage,
          pageSize: this.paginations.pageSize,
          ...this.search_data
        };
        //完成查询
        this.$http.get("",data).then(res => res);
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-form-inline {
    display: inline-block;
    float: right;
  }

  .btm-action {
    margin-top: 20px;
    text-align: center;
  }

  .actions-top {
    height: 46px;
  }

  .pagination {
    display: inline-block;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
