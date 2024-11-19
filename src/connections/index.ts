// src/connections/index.ts
import express from 'express';
import cors from 'cors';

const app = express();

// Configuração do app
app.use(express.json());
app.use(cors());

export { app };
