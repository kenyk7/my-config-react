import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button
      data-testid="btnCounter"
      onClick={() => setCount((oldCount) => oldCount + 1)}
    >
      count is {count}
    </Button>
  );
}
