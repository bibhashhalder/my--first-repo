import logo from './logo.svg';

import './App.css';
import TopButton from './component/TopButton';
import Input from './component/Input';
import TImeAndLocation from './component/TImeAndLocation';

function App() {
  return (
    <div className='max-w-screen-md px-32 py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-700'>
    <TopButton></TopButton>
    <Input></Input>
    <TImeAndLocation></TImeAndLocation>
    </div>
  );
}

export default App;
