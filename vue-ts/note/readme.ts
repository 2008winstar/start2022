/**
 * createApp(App)
 * createApp(rootComponent, rootProps = null)
 * mount(rootContainer, isHydrate, isSVG)
 *    vnode = createVNode(rootComponent, rootProps)
 *    createVNode(type, props, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false)
 *    createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true)
 *    createBaseVNOde(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, needFullChildrenNormalization)
 * render(vnode, rootContainer, isSVG)
 * render(vnode, container, isSVG)
 *    patch(container._vnode, vnode, container, null, null, null, isSVG);
 *    patch(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
 *      processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
 *      processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
 *        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
 *        mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized)
 *        instance = createComponentInstance(initialVNode, parentComponent, parentSuspense)
 *        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
 *        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
 *          subTree = renderComponentRoot(instance)
 *          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG)
 *
 *
 *
 */