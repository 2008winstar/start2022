import { createVNode } from './vnode';

export function createAppContext() {
  return {
    app: null as any
  }
}

export function createAppAPI(render, hydrate?) {
  return function createApp(rootComponent, rootProps = null) {
    const context = createAppContext();

    let isMounted = false;

    const app = (context.app = {
      mount(rootContainer, isHydrate?: boolean, isSVG?: boolean) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          render(vnode, rootContainer, isSVG);
        }
        console.log('mount');
      }
    });
    return app;
  }
}