import {createBrowserHistory} from 'history';

export const HISTORY = createBrowserHistory();

console.log("@@ HISTORY", HISTORY);

export const navigate = (url) => {
    HISTORY.push(url);
};
