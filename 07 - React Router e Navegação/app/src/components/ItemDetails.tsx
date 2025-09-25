import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  const { id } = useParams(); // Pega o parâmetro dinâmico da URL
  return <h2>Detalhes do Item: {id}</h2>;
}

export default ItemDetails;
