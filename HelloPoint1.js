var VSHADER_SOURCE=
	'void main() {\n' +
	'gl_Position=vec4(0.0,0.0,0.0,1.0);\n'+//设置坐标
	'gl_PointSize=10.0;\n'+//设置尺寸
	'}\n';

var FSHADER_SOURCE=
	'void main() {\n'+
	'gl_FragColor=vec4(1.0,0.0,0.0,1.0);\n'+//设置颜色
	'}\n';

function main(){
	var canvas =document.getElementById('webgl');

	var gl=getWebGLContext(canvas);
	if(!gl){
		console.log('Failed to get the rendering contest for WebGL');
		return;
	}

	//初始化着色器
	if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
		console.log('Failed to initialize shaders');
		return;
	}
	
	//清空<canvas>
	gl.clear(gl.COLOR_BUFFER_BIT);

	//绘制一个点
	gl.drawArrays(gl.POINTS,0,1);
}
