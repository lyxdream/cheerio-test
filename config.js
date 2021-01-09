module.exports = {
    // 如果将分隔符定义为空格，有可能错误的截取爬取到的数据
    // 且分隔符要避免使用正则表达式中需要转义的字符
    separator: ';;;',
    rawDataFileName: 'output/data.txt',
    saveFileName: 'output/out.xlsx'
  };