import React from 'react';
import StakingWidget from 'fanbase-staking-widget';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex justify-center'>
        <div className='flex'>
          <StakingWidget 
            appId='0x3946fb7bd818532c15370fe059de80783d3fae31070dd3e0730838fd20cb1aa5' // Access key from plan.fanase.io
            chainId={80001} // Plan registered chain id
          />
        </div>
      </div>
    </div>
  );
}

export default App;