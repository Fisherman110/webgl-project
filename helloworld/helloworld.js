//从这里开始
function main(){
    console.info("dkfjk");
    const canvas=document.querySelector("#glcanvas");
    //初始化webgl上下文
    const gl=canvas.getContext("webgl");

    //确认webgl支持性
    if(!gl){
        alert("无法初始化webgl，你的浏览器，操作系统，硬件等可能无法支持");
        return;
    }

    //使用完全不透明的黑色清除所有图像
    gl.clearColor(0.0,0.0,0.0,1.0);

    //用上面指定的颜色清除缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT);
}