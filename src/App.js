import React, {useState} from 'react';
import './App.css';

function App() {
  let [title, changeTitle] = useState(['javascript', 'node', 'mongodb'])
  let [like, changeLike] = useState(0)
  let [modal, changeModal] = useState(true)
  function resultTitle(){
    let newArray = [...title]
    newArray[0] = 'react'
    changeTitle(newArray)
  }
  return (
    <div className="App">
      <button onClick={resultTitle}>title change</button>
      <div>
        <h1>{title[0]}</h1>
        <h2>2022-01-11</h2>
      </div>
      {
        title.map(rstTitle => {
          return (
            <div>
              <h1>{rstTitle}</h1>
              <div className='app_like'>
                <span onClick={()=>{changeLike(like+1)}}>👍</span>
                <h3>{like}</h3>
              </div>
              <h2>2022-01-12</h2>
            </div>
          )
        })
      }
      {
        modal === true?
        <Modal title={title}></Modal>:null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div>
      <div>{props.title[0]}</div>
      <div>날짜</div>
    </div>
  )
}

export default App;
