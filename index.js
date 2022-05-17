import express, { json } from 'express';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(json());
app.use(cors());

const paletas = [
    {
      id: 1,
      sabor: 'Açaí com Leite Condensado',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: 'assets/images/acai-com-leite-condensado.png',
      preco: 10.0,
    },
    {
      id: 2,
      sabor: 'Banana com Nutella',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: 'assets/images/banana-com-nutella.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Chocolate Belga',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: 'assets/images/chocolate-belga.png',
      preco: 7.0,
    },
  ];

/* Get all */
  app.get('/paletas/find-paletas', (req, res) => {
    res.send(paletas);
  });

/* Get by id */
  app.get('/paletas/find-paleta/:id', (req, res) => {
    const idParam = Number(req.params.id);
    const chosenPaleta = paletas.find((paleta) => paleta.id === idParam);
    const verificador= idParam==undefined
    res.send(verificador? "Paleta não encontrada" : chosenPaleta);
  });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
