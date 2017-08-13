import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import HEAD from './Head';
// import Input from './Input';
// import CTOPAR from './CTOPAR';
import H from './Home';
import registerServiceWorker from './registerServiceWorker';










ReactDOM.render(<H />, document.getElementById('root'));
registerServiceWorker();
//设置浏览器的自动更新功能
if(module.hot){
  module.hot.accept()
}
