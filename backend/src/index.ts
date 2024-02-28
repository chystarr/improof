import express, { Application, Request, Response } from 'express';
const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});