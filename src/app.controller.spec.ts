import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Welcome To The Big Short!"', () => {
      expect(appController.getHello()).toBe('Welcome To The Big Short!');
    });
  });
  describe('service', () => {
    it('should return longest word of a string', () => {
      const sentence = 'this is too long sentence with !@@£$%%^&*';
      expect(appService.getBigWord(sentence)).toBe('Longest Word: !@@£$%%^&*, Length: 10 \n')
    });

    it('should return longest word of a string', () => {
      const sentence = 'this';
      expect(appService.getBigWord(sentence)).toBe('Longest Word: this, Length: 4 \n')
    });

    it('should return 0 if no string is supplied', () => {
      const sentence = '';
      expect(appService.getBigWord(sentence)).toBe('Longest Word: , Length: 0 \n')
    });

    it('should return shortest word of a string', () => {
      const sentence = 'this is too long sentence with !@@£$%%^&*';
      expect(appService.getShortWord(sentence)).toBe('Shortest Word: is, Length: 2 \n')
    });

    it('should return 0 if no string is supplied', () => {
      const sentence = '';
      expect(appService.getShortWord(sentence)).toBe('Shortest Word: , Length: 0 \n')
    });
  })
});
