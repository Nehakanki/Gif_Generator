import Random from './Components/Random';
import Tag from './Components/Tag';
import './App.css';

function App() {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden'>
      <h1 className='bg-white rounded-sm w-11/12 mt-[30px] text-center mx-auto px-5 py-5
      text-3xl  font-bold'>Random GIFs</h1>
      <div className='sm:flex flex-col gap-4 md:flex-row w-full  items-center  justify-evenly mt-[20px] ' >
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
