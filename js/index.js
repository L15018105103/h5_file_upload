(function () {
  var oBox = document.getElementById('box');
  var oSpan = oBox.children[0];

  oBox.addEventListener('dragenter', drag, false);
  oBox.addEventListener('dragover', drag, false);
  oBox.addEventListener('dragleave', drag, false);
  oBox.addEventListener('drop', drag, false);

  function drag(e) {
    e = e || window.event;
    e.preventDefault();
    var type = e.type;
    switch (type){
      case 'dragenter': oSpan.style.display = 'none';break;
      case 'dragleave': oSpan.style.display = 'block';break;
      case 'drop': addImgFile(e);break;
    }
  }
  function addImgFile(e) {
    var imgFiles = e.dataTransfer.files;
    //循环遍历多个文件对象
    for(var i = 0; i < imgFiles.length; i++){
      //转化成二进制数据
      var imgFile = new FileReader();//文件读取对象
      imgFile.readAsDataURL(imgFiles[i]);//读取要转换的对象
      //监听文件读取结束后事件
      imgFile.onloadend = function (e) {
        var oImg = document.createElement('img');
        oImg.src = e.target.result;//e.target.result就是最后的路径地址
        oBox.appendChild(oImg);
      };
    }
  }
})();