import { tw } from 'twind'
import { animation } from 'twind/css'

import logo from './logo.svg';


const logoSpin = animation('20s linear infinite', {
  'from, 0%, to': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

function App() {
  return (
    <div className={tw`text-center`}>
      <header className={tw`bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-white`}>
        <img src={logo} className={tw`h-[40vmin] pointer-events-none motion-safe:animate-[${logoSpin}]`} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={tw`text-[#61dafb]`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
