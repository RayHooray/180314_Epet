#Epet day01
## 今日完成事项
	今天完成了关于epet项目的整体框架的搭建
	主要内容包括： 
			1. 通过vue-cli脚手架搭建vue项目
			2. 通过node局部安装vue-router插件，并为项目创建路由
			3. 创建各个页面的vue模块
			4. 编写底部导航和主页面
	遇到的问题：
			1. stylus使用时发现其不能使用：nth.child()来指定同类兄弟元素
			2. 犹豫底部导航采用的ul>li模式，在设置绑定点击事件时，将点击事件绑定到li下，雪碧图切换时重新定位的class属性on，需要绑定到li下子元素内，然后重新定位雪碧图