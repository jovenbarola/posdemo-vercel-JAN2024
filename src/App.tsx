import { FC } from 'react';

import "../node_modules/nes.css/css/nes.css"

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <section className='showcase'>
      <section className='nes-container with-title'>
        <h3 className="title">Login</h3>
        <div className="nes-field">
          <input className='nes-input is-success' type="text" placeholder="Username" /><br />
        </div>
        <div className="nes-field">
          <input className='nes-input' type="password" placeholder="Password" /><br />
        </div>
        <button className='nes-btn is-primary'>Login</button>
      </section>
    </section>
  );
};
