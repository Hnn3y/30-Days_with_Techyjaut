# Day 9 – API Mastery in Backend Development

## Overview

Today’s focus was mastering **APIs** — the foundation of communication between applications and services. I explored the concept, architecture, and practical implementation of both consuming and building RESTful APIs with Express.js. Understanding APIs is critical for building scalable backend systems and unlocking the power of integration in modern software engineering.

---

## What is an API?

An **API (Application Programming Interface)** is a protocol that allows different software components to interact. In web development, it enables clients (such as browsers or mobile apps) to communicate with servers using HTTP methods like:

- `GET` – Retrieve data
- `POST` – Send data
- `PUT` / `PATCH` – Update data
- `DELETE` – Remove data

---

## Key Concepts Learned

### 1. RESTful API Principles

- **Statelessness**: Each request contains all necessary data.
- **Resource-based URIs**: Clean and logical endpoint structure.
- **HTTP Methods & Status Codes**: Clear communication of operation outcomes.
- **JSON**: Standard data format for web APIs.

### 2. Building APIs with Express.js

I developed a sample RESTful API using Node.js and Express:

```js
const express = require('express');
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' }
    ];

    app.get('/api/products', (req, res) => {
      res.json(products);
      });

      app.post('/api/products', (req, res) => {
        const newProduct = {
            id: products.length + 1,
                name: req.body.name
                  };
                    products.push(newProduct);
                      res.status(201).json(newProduct);
                      });

                      app.delete('/api/products/:id', (req, res) => {
                        const id = parseInt(req.params.id);
                          const index = products.findIndex(p => p.id === id);
                            if (index !== -1) {
                                const deleted = products.splice(index, 1);
                                    res.json(deleted[0]);
                                      } else {
                                          res.status(404).json({ error: 'Product not found' });
                                            }
                                            });

                                            app.listen(3000, () => console.log('Server running on port 3000'));?