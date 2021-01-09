import { Injectable,Logger } from '@nestjs/common';
import { ProductService } from './product.service';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  private readonly logger = new Logger(AppService.name);
  constructor(
    private readonly productService: ProductService,
  ) {}
   /**
   *
   * 主流程
   * @memberof AppService
   */
   async main(){
    // this.logger.log(`个股行情为：`);
    let info = await this.productService.getProduct();
    // this.logger.log(`个股行情为：${info}`);
    return info;
  }
 





}
