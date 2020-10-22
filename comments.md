完成度：
=======
* 页面还原度很高，唯一一点就是education content那里左边需要padding
* user和education都从后端获取数据且展示在了前端，没有异常


测试：
=====
* 有写api层的测试，且测得比较全面，但是测试文件名和被测文件名没有对齐

Details:

- \- 这里可以使用http中定义的baseURL

知识点：
=======
* 使用了scss及其部分特性（嵌套，变量），且对sccs进行了拆分，且使用了flex布局
* 页面结构划分合理，语义化标签使用较好
* JS抽取了http请求层，并按模块划分了js，也使用到了较多ES6语法，方法拆分也比较细

Details:
+ \+ 整体使用了flex布局
+ \+ 正确使用了解构赋值
- \- 下面这个 await 可以省略

工程实践：
=========
* 有小步提交，message还可以优化
* scss，js拆分做的也比较好，没有长方法和深嵌套
* eslint 存在error

Details:

- \- jquery可以通过npm方式引入
- \- 这里使用标签选择器的话，要不使用类选择器代替，要不改成 > li， 否则作用范围是education-content内所有li;
- \- 固定内容可以写在html中，其他几个也一样（ABOUT ME等）
- \- 可以使用正则匹配形式取出id，降低userId对url层级对依赖，最后也少一层判断
- \- try catch 放在使用api的地方，也会避免eslint 的error

