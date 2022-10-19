import { Button, Container, List } from '@mantine/core';
import React from 'react';

const data = [
  {
    id: 1,
    value: 'This is the first item',
  },
  {
    id: 2,
    value: 'This is the second item',
  },
  {
    id: 3,
    value: 'This is the third item',
  },
  {
    id: 4,
    value: 'This is the fourth item',
  },
];

export const Diverse = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <Container>
      <h1>Litt diverse</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint eum consequatur sapiente sequi
        necessitatibus ipsam minus cumque libero? Sunt deleniti assumenda alias odit dignissimos maxime, saepe itaque
        cum atque!
      </p>
      <Button onClick={handleClick}>Count: {count}</Button>
      <p>{count > 5 && 'Count is over 5'}</p>
      <List p="md">
        {data.map((d) => (
          <List.Item key={d.id}>{d.value}</List.Item>
        ))}
      </List>
    </Container>
  );
};
