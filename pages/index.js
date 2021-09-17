import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component, useState, useEffect } from 'react';
import api from './api/api.js';
import Form from './_form.js';

function Home() {
  const [state, setState] = useState({
    value: '',
    repos: [],
    error: '',
  });

  const [data, setData] = useState({});

  const changeUser = (value) => {
    setState({ value });
  };

  function searchUser() {
    const { value } = state;
    api.get(`/v1/cnpj/${value}`).then(
      (response) => setData(response.data),
      (error) => {
        console.log(error);
      }
    );
  }

  const { value, repos, error, loading, informations } = state;

  return (
    <div>
      <Form
        changeUser={changeUser}
        value={value}
        buttonAction={searchUser}
        error={error}
        loading={loading}
      />
      <b> Razão Social: </b>
      {data.nome} <br />
      <b> Cnpj: </b>
      {data.cnpj} <br />
      <b> Rua: </b>
      {data.logradouro} <br />
      <b> Número:</b> {data.numero} <br />
      <b> Bairro</b>: {data.bairro}
      <br />
      <b> Municipio</b>: {data.municipio} <br />
      <b> Email</b>: {data.email} <br />
      {data.qsa?.map((e) => {
        return (
          <>
            <b>Sócio</b>: {e.nome}
            <br />
          </>
        );
      })}{' '}
      <br />
      <b>Informações atualizadas em </b>: {data.ultima_atualizacao} <br />
    </div>
  );
}

export default Home;
