import { ShapeFlags } from '../../shared/shapeFlags';
import { initProps, normalizePropsOptions } from './componentProps';
import { initSlots } from './componentSlots';
import { NOOP } from '../../shared';
import { createAppContext } from './apiCreateApp';

const emptyAppContext = createAppContext();

let uid = 0;

export function createComponentInstance(
  vnode,
  parent,
  suspense
) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    render: null,
    propsOptions: normalizePropsOptions(type, appContext),
    suspense
  };

  return instance;
}

export function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & ShapeFlags.STATEFUL_COMPONENT;
}

export function setupComponent(instance, isSSR = false) {
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);

  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  finishComponentSetup(instance, isSSR);
}

export function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {

  }
  instance.render = (Component.render || NOOP);
}