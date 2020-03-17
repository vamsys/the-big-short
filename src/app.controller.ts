import {All, BadRequestException, Controller, Get, HttpStatus, Post, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {Request, Response} from 'express';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/get-big')
  public async getTheBigWord(@Req() req: Request, @Res() res: Response): Promise<any> {
      const sentence = req.body['sentence'];
      return res.status(HttpStatus.OK).send(this.appService.getBidWord(sentence));
  }

  @All('/get-short')
  public async getTheShortWord(@Req() req: Request, @Res() res: Response): Promise<any> {
      const allowedMethods = ['POST'];
      if (!allowedMethods.includes(req.method)) {
          throw new BadRequestException();
      }
      const sentence = req.body['sentence'];
      return res.status(HttpStatus.OK).send(this.appService.getShortWord(sentence));
  }
}
