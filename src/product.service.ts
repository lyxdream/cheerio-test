import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
var fs = require('fs');
var path = require('path');
var config = require('./../config.js');
let counter = 0;  // 成功爬取的数据计数
var xlsx = require('node-xlsx');
let fileRoute = path.resolve(__dirname, config.rawDataFileName);
let fileName = path.resolve(__dirname, config.saveFileName);

@Injectable()
export class ProductService {
    private readonly logger = new Logger(ProductService.name);
    /**
     *
     * @returns
     * @memberof ProductService
     */
    async getProduct() {
      const url = `http://quotes.money.163.com/f10/zycwzb_600519.html`;
      const res = await axios.get(url, {});
      const titleList = [];
      const dataList = [];
      const $ = cheerio.load(res.data);
      const title = $('.col_l tbody tr').eq(10).text();
      const head = $(".col_r table tbody tr.dbrow").eq(0).find('th');
      const cont = $('.col_r table tbody tr').eq(11).find('td');
    
      head.each(function(){
        titleList.push($(this).text())
        console.log(titleList)
      })
      cont.each(function(){
        dataList.push($(this).text())
        console.log(dataList)
      })
      this.saveFile({title,titleList,dataList});
    }
    // 转存文本
 saveFile(data) {
  data = [
    {
        name : '个股行情',
        data : [
          ['报告日期', ...data.titleList],
          [ data.title, ...data.dataList]
        ]
    }
]
    const buffer = xlsx.build(data);
    console.log(buffer)
      fs.writeFile('./out.xlsx', buffer, 'binary',function(err){
        if(err){
            console.log(err);
        }
      })
    }
  }