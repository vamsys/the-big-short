import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome To The Big Short!');
  });

  it('/get-big (POST)', () => {
      const body = {
          sentence: "this is too long sentence with !@@£$%%^&*"
      };

      return request(app.getHttpServer())
          .post('/get-big')
          .send(body)
          .expect(200)
          .expect('Longest Word: !@@£$%%^&*, Length: 10 \n');
  });

  it('/get-short (POST)', () => {
      const body = {
          sentence: "this is too long sentence with !@@£$%%^&*"
      };

      return request(app.getHttpServer())
          .post('/get-short')
          .send(body)
          .expect(200)
          .expect('Shortest Word: is, Length: 2 \n');
    });

  it('/get-short (GET)', () => {
    return request(app.getHttpServer())
      .get('/get-short')
      .expect(400)
  });

  it('/get-big (GET)', () => {
    return request(app.getHttpServer())
      .get('/get-big')
      .expect(404)
  });



});
