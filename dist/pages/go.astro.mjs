export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/go_95ceadc3.mjs').then(n => n.g);

export { page };
