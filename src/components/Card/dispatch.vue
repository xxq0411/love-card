<template>
  <div class="dispatch">
    <h1 class="power">功能介绍</h1>
    <p class="content">你可以通过新建卡模按钮建立卡片，
      并在我的卡片中看到已有的卡片类型。
      APP会通过您的性别进行不同风格展示，
      女生为可爱的粉色系，男生为浪漫的蓝色系。
      您可以通过修改个人信息按钮进入修改页面，
      更改个人昵称，性别，家庭住址等。
      希望您可以有一个愉快的体验！
      </p>
  </div>
</template>
<style>
  @font-face {
    font-family: 'lixuke';
    src: url(/static/font/lixuke.ttf) format('truetype');
  }
  .power {
    font-family: 'lixuke';
    font-size:2vw;
  }
  .content {
    font-family: 'lixuke';
    font-size:1.5vw;
    width:20vw;
    height: 20vw;
    padding: 5px;
    margin: 0 auto;
    text-align: center;
    border: solid 15px #eefba338;
    box-shadow: 2px 4px 12px rgba(0,0,0,0.3);
    border-radius: 50%;
    overflow: hidden;
    transition: all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
  }
  .dispatch:hover .content {
    width:20vw;
    height: 20vw;
    border-radius: 5%;
    overflow: hidden;
  }
</style>
