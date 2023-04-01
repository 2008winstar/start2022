import { createRenderer } from '../../runtime-core/renderer';
import { nodeOps } from './nodeOps';
import { patchProp } from './patchProp';

import { extend } from '../../shared';

const rendererOptions = extend({ patchProp }, nodeOps);
let renderer;

function ensureRenderer() {
    return (renderer || (renderer = createRenderer(rendererOptions)));
}
export const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    return app;
})