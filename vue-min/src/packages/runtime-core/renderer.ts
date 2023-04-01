import { createAppAPI } from './apiCreateApp';
import { ShapeFlags } from '../../../../vue-ts/packages/shared/shapeFlags';
import { ReactiveEffect } from '../../../../vue-ts/packages/reactivity/src/effect';
import { queueJob } from '../../../../vue-ts/packages/runtime-core/src/scheduler';
import { createComponentInstance } from '../../../../vue-ts/packages/runtime-core/src/component';
import { renderComponentRoot } from '../../../../vue-ts/packages/runtime-core/src/componentRenderUtils';


export function createRenderer(options) {
    return baseCreateRenderer(options);
}

function baseCreateRenderer(options) {
    const patch = (
        n1,
        n2,
        container,
        anchor = null,
        parentComponent = null,
        parentSuspense = null,
        isSVG = false,
        slotScopeIds = null,
        optimized = false
    ) => {
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            default:
                if (shapeFlag & ShapeFlags.COMPONENT) {
                    processComponent(
                      n1,
                      n2,
                      container,
                      anchor,
                      parentComponent,
                      parentSuspense,
                      isSVG,
                      slotScopeIds,
                      optimized
                    )
                }
        }
    }

    const processComponent = (
      n1,
      n2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    ) => {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          optimized
        );
    }

    const mountComponent = (
      initialVNode,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      optimized
    ) => {
        const compatMountInstance = initialVNode.isCompatRoot && initialVNode.component;
        const instance = compatMountInstance || (initialVNode.component = createComponentInstance(
          initialVNode,
          parentComponent,
          parentSuspense
        ));
        setupRenderEffect(
          instance,
          initialVNode,
          container,
          anchor,
          parentSuspense,
          isSVG,
          optimized
        );
    }

    const setupRenderEffect = (
      instance,
      initialVNode,
      container,
      anchor,
      parentSuspense,
      isSVG,
      optimized
    ) => {
        const componentUpdateFn = () => {
            console.log('componentUpdateFn');
            if (!instance.isMounted) {
                const subTree = (instance.subTree = renderComponentRoot(instance));
                patch(
                  null,
                  subTree,
                  container,
                  anchor,
                  instance,
                  parentSuspense,
                  isSVG
                )
            }
        };
        const effect = (instance.effect = new ReactiveEffect(
          componentUpdateFn,
          () => queueJob(update),
          instance.scope
        ));
        const update = (instance.update = () => effect.run());
        update();
    }
    const render = (vnode, container, isSVG) => {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    return {
        render,
        createApp: createAppAPI(render)
    }
}