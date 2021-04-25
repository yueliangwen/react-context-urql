import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useClient } from '../.';

const Thing = (urql) => {
  return <div>hello react-context-url</div>;
};

const App = () => {
  const urql = useClient();
  return (
    <div>
      <Thing urql={urql} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
