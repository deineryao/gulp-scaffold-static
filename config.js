const source = "src"

module.exports = {
	source: source,  // 源文件目录名
	dist  : "dist", // 生成最终文件的目录名
	port  : 3000,     // browser-sync服务器监听端口
	html  : [         // html文件存在路径
		source + "/*.html",
		source + "/tpl/*.html"
	],
	css   : [source + "/css/*.css"],   // css文件存在路径
	scss  : [source + "/scss/*.scss"], // scss文件路径
	script: [source + "/script/*.js"], // script文件路径
	img   : [source + "/images/*.*"]      // img文件路径
}