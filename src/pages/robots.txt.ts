import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const isProduction = import.meta.env.PUBLIC_SITE_ENV === 'production';

  const body = isProduction
    ? [
        'User-agent: *',
        'Allow: /',
        '',
        'User-agent: OAI-SearchBot',
        'Allow: /',
        '',
        'User-agent: GPTBot',
        'Disallow: /',
        '',
        'Sitemap: https://maupholsteryclt.com/sitemap-index.xml',
        '',
      ].join('\n')
    : [
        'User-agent: *',
        'Disallow: /',
        '',
        'Sitemap: https://maupholsteryclt.com/sitemap-index.xml',
        '',
      ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
