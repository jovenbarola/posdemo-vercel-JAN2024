import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Point Of Sale</h1>
      <p className='comment'>Deployed in vercel</p>
      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />
      <button>Login</button>
    </div>
  );
};
