import React from 'react';
import { Button, Htag, Tag } from '../components';
import { Ptag } from '@/components/Ptag/Ptag';

export default function Home() {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Ptag size="s">Это маленький текст</Ptag>
      <Ptag>Это средний текст</Ptag>
      <Ptag size="l">Это большой текст</Ptag>
      <Button
        appearance="primary"
        arrow="right"
      >
        Кнопка
      </Button>
      <Button
        appearance="ghost"
        arrow="right"
      >
        {' '}
        Кнопка 2
      </Button>
      <Tag size="m">medium</Tag>
      <Tag color="primary">мал</Tag>
      <Tag color="green">мал зел</Tag>
      <Tag color="red">мал кр</Tag>
      <Tag
        color="grey"
        href="/"
      >
        мал сер ссыль
      </Tag>
    </>
  );
}
