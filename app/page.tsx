import React from 'react';
import { Button, Htag } from '../components';
import Logo from '../public/next.svg';

export default function Home() {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Logo />
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost"> кнопка 2</Button>
    </>
  );
}
