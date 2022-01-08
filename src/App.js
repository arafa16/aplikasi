import React from "react";

function HelloWorld(){
  return(
    <div> Perubahan</div>
  )
}

function Button(){
  return(
    <button onClick={() => alert('Selamat Datang')}>click me</button>
  )
}

function App(){
  return(
    <div>
      <HelloWorld />
      <Button />
    </div>
  );
}

export default App;