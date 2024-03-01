export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/bedrock-linux_cd29f8c0.mjs').then(n => n.b);

export { page };
