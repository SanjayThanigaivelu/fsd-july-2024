
import './Movei.css';
//import PropDrilling from './PropDrilling';
//import './App.css';
//import { CircleContainer } from './CircleContainer';
//import TopContainer from './TopContainer';
//import Listener from './Listener';
//import ToggleDemo from './ToggleDemo';
//import ListRendering from './ListRendering';
//import MyLink from './MyLink';
//import BasicForm from './BasicForm';
//import UseEffort from './UseEffort';
//import { Route, Routes } from 'react-router-dom';
//import Sign from './Sign';
//import Object from './Object';
import MoveiApii from './MoveiApii';
//import Apii from './Apii';
//import UsersApi from './UsersApi';

/*function Upper({newValue,oldValue}){
  let Changes=(newValue-oldValue).toFixed(2);
  let percent=(Changes *100 /oldValue).toFixed(2);
  return (
   <fieldset>
   {newValue}
<br/>
<span className={(Changes>=0 ?'green':'red')}>{Changes}</span>
&nbsp;
    {Changes >= 0 ? <span className='green'>&uarr;</span> : <span className='red'>&darr;</span>}
    &nbsp;
<span className={(percent>=0?'green' : 'red')}>{percent}</span>

   
    </fieldset>
  )
} */



function App() {
  return (
<div>
<MoveiApii/>

    </div>
  );
}

export default App;
