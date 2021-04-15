import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Demo5 from './Demo5';
import Demo6 from './Demo6';
import Demo7 from "./Demo7";

const Default = () => '';

const routes = {
    '/demo1': Demo1,
    '/demo2': Demo2,
    '/demo3': Demo3,
    '/demo5': Demo5,
    '/demo6':Demo6,
    '/demo7': Demo7,
    '/': Default,
};

const Router = ({ path = '/'}) => {
    const Comp = routes[path];
   return <Comp/>;
};

export default Router;