/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import 'bulma/css/bulma.css'

import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
