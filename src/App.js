import './App.css';
import Python from './components/python';
import Java from './components/java';
import Go from './components/Go';
import Node from './components/Node';

function App() {
  return (
    <div>
      <h1>Vote for Your Lnaguage!</h1>
     <Python name="python"/>
     <Java name="java" />
     <Node name="Node" />
     <Go name="Go"/>
    </div>
  );
}

export default App;
