import {isObject, isString} from '../../shared';
import {ShapeFlags} from '../../shared/shapeFlags';

export const createVNode = _createVNode;

function createBaseVNode(
    type,
    props = null,
    children = null,
    patchFlag = 0,
    dynamicProps = null,
    shapeFlag = 0,
    isBlockNode = false,
    needFullChildrenNormalization = false
) {
    const vnode = {
        __v_isVNOde: true,
        __v_skip: true,
        type,
        props,
        shapeFlag
    };
    return vnode;
}

function _createVNode(
    type,
    props,
    children = null,
    patchFlag = 0,
    dynamicProps = null,
    isBlockNode = false
) {
    const shapeFlag = isObject(type)
      ? ShapeFlags.STATEFUL_COMPONENT
      : 0;
    return createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      isBlockNode,
      true
    )
}

export function normalizeVNode(child) {
    console.log('normalizeVNode');
    console.log(child);
}

export const InternalObjectKey = `__vInternal`;