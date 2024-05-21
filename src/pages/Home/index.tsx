import { Button } from 'antd';
import { FC, useState } from 'react';

const Home: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Home</h1>
      <p>{count}</p>
      <Button onClick={() => setCount((pre) => pre + 1)}>Click me</Button>
    </div>
  );
};

export default Home;
