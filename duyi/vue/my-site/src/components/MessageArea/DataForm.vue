<template>
  <div class="data-form-container">
    <div class="form-item">
      <div class="input-area">
        <input type="text" placeholder="用户昵称">
        <span class="tip">0/10</span>
      </div>
      <div class="error">
        error
      </div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea type="text" placeholder="输入内容" />
        <span class="tip">0/300</span>
      </div>
      <div class="error">
        error
      </div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button> 提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;

  .form-item {
    margin-bottom: 8px;

    .input-area {
      width: 50%;
      position: relative;
    }

    .text-area {
      position: relative;
    }

    .tip {
      position: absolute;
      right: 5px;
      bottom: 5px;
      color: #b4b8bc;
      font-size: 12px;
    }

    input,
    textarea {
      display: block;
      width: 100%;
      box-sizing: border-box;
      border: 1px dashed @gray;
      outline: none;
      color: @word;
      font-size: 14px;
      border-radius: 4px;

      &:focus {
        border-color: @primary;
      }
    }

    input {
      padding: 0 15px;
      height: 40px;
    }

    textarea {
      resize: none;
      padding: 8px 15px;
      height: 120px;
    }

    .error {
      margin-top: 6px;
      color: @danger;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
    }

    button {
      position: relative;
      cursor: pointer;
      border: none;
      outline: none;
      width: 100px;
      height: 34px;
      color: #fff;
      border-radius: 4px;
      background: @primary;

      &:hover {
        background: darken(@primary, 10%);
      }

      &:disabled {
        background: lighten(@primary, 20%);
        cursor: not-allowed;
      }
    }
  }
}
</style>