import { ShapeFlags } from '../../shared/shapeFlags';
import { normalizeVNode } from './vnode';

export function renderComponentRoot(instance) {
  console.log('renderComponentRoot');
  console.log(instance);
  const {
    type,
    vnode,
    proxy,
    withProxy,
    props,
    render,
    renderCache,
    data,
    setupState,
    ctx,
  } = instance;
  let result;

  try {
    if (vnode.shapeFlag & ShapeFlags.STATEFUL_COMPONENT) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(
        render!.call(
          proxyToUse,
          proxyToUse!,
          renderCache,
          props,
          setupState,
          data,
          ctx
        )
      );
    }
  } catch (e) {

  }
  console.log(result);
  return result;
}