import { def } from '../../shared';
import { InternalObjectKey } from './vnode';

export function initProps(
  instance,
  rawProps,
  isStateful,
  isSSR
) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);

  instance.propsDefaults = Object.create(null);

  setFullProps(instance, rawProps, props, attrs);
}

function setFullProps(
  instance,
  rawProps,
  props,
  attrs
) {
  const [options, needCastKeys] = instance.propsOptions;
}

export function normalizePropsOptions(
  comp,
  appContext,
  asMixin = false
) {
  const normalized = {};
  const needCastKeys = [];
  const res = [normalized, needCastKeys];
  return res;
}