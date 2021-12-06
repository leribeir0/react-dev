import React from 'react';
import { Title, Form, Repos } from './styles';
import { FiChevronsRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

export const Dashboard: React.FC = ()=> {
  return (
    <>
      <img src ={logo} alt="GitCollection"/>
      <Title>Catálogo de repositórios do Github</Title>

      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img src="https://avatars.githubusercontent.com/u/19867227?v=4" alt="Repositorio" />
          <div>
            <strong>leribeir0/nextjs-dev</strong>
            <p>Repositorio do mini curso gratuito de reactjs</p>
          </div>
          <FiChevronsRight size={20}/>
        </a>

      </Repos>
    </>  
  );
};


