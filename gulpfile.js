// xxx 1. 删除文件
// xxx 2. 复制文件
// xxx 3. 替换文件
// 4. 压缩文件
// 5. 监听文件
// 6. 处理SASS

"use strict";

var del = require("del")
var gulp = require("gulp")
var gulpsync = require("gulp-sync")(gulp)
var fileInclude = require("gulp-file-include")
var browserSync = require('browser-sync')
var sass = require("gulp-sass")

var config = require("./config.js")

gulp.task("start", gulpsync.sync(["delete", "html", "sass", "css", "script", "img", "watch", "server"]))

// 删除多余的文件
gulp.task("delete", function() {
	return del(config.dist, {force: true})
})

// 处理html模版
gulp.task("html", function() {
	return gulp.src(config.html, {base: config.source})
						 .pipe(fileInclude({prefix: "@@", basepath: "@file"}))
						 .pipe(gulp.dest(config.dist))
})

// 将sass文件处理成css文件
gulp.task("sass", function() {
	return gulp.src(config.scss)
						 .pipe(sass.sync({outputStyle: "compressed"}).on("error", sass.logError))
						 .pipe(gulp.dest(config.source + "/css"))
})

// 处理css文件
gulp.task("css", function() {
	return gulp.src(config.css, {base: config.source}).pipe(gulp.dest(config.dist))
})

// 处理脚本文件
gulp.task("script", function() {
	return gulp.src(config.script, {base: config.source}).pipe(gulp.dest(config.dist))
})

// 处理图片
gulp.task("img", function() {
	return gulp.src(config.img, {base: config.source}).pipe(gulp.dest(config.dist))
})

// 监听文件的变更
gulp.task("watch", function() {
	gulp.watch(config.img,    gulpsync.sync(["img", "reload"]))         // 监听图片文件的变更
	gulp.watch(config.html,   gulpsync.sync(["html", "reload"]))        // 监听html文件的变更
	gulp.watch(config.scss,   gulpsync.sync(["sass", "css", "reload"])) // 监听sass文件
	gulp.watch(config.script, gulpsync.sync(["script", "reload"]))      // 监听script文件
})

// 重新加载页面
gulp.task("reload", function(done) {
	browserSync.reload();
	done();
})

// 启动服务器
gulp.task('server', function(done) {
	browserSync.init({
		server: {
			port: 3000,
			baseDir: config.dist
		}
	})

	done()
})

// 默认构建任务，出错提示
gulp.task("default", function(done){
	console.log("没有指定构建模块，构建失败！")
})
