# 智慧芽 hacking
如何判定一个行业很热门
1. 某一年行业专利排名
1. 行业专利数的增长趋势
1. 风投；公司数量；初创公司数量。 以及增幅。。。

## 接口
### 某一年行业专利排名
请求地址    
patent/num-rank    

请求参数    
year    

返回
```
[{
    name: '农业',
    num: '1580'
},...]
```

### 行业专利数的增长趋势
请求地址    
patent/speed-rank    

请求参数    
year    

返回
```
[{
    name: '农业',
    per: 0.2// （今年－去年）／去年
},...]
```


## 项目启动
1. 安装依赖 `npm i`
1. 启动 `npm start`
1. 打开浏览器，地址为 `http://127.0.0.1:3000/`


## 行业分类
* 农业；
* 作业；运输
* 化学；冶金
* 纺织 造纸；
* 固定建筑物
* 机械工程、照明、加热
* 物理
* 电学
http://www.soopat.com/IPC/Result

## 其他
* 数据呈现，使用[echarts](http://echarts.baidu.com/index.html) [why?](http://echarts.baidu.com/doc/slide/whyEcharts.html
