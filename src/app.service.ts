import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Welcome To The Big Short!';
  }

  public getBidWord(sentence: string): string {
      const words = sentence.split(" ");
      const longest =  words.reduce((a, b) => a.length >= b.length ? a : b);
      return `Longest Word: ${longest}, Length: ${longest.length} \n`;
  }

  public getShortWord(sentence: string): string {
      const words = sentence.split(" ");
      const shortest = words.reduce((a, b) => a.length <= b.length ? a : b);
      return `Shortest Word: ${shortest}, Length: ${shortest.length} \n`;
    }

}
