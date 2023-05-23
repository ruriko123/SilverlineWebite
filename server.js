const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
 
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.NODE_ENV !=="production"? 'localhost':"templatetwo.silverlinepos.com";
const port = process.env.PORT||4789;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
 
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
 
      if (pathname === '/faqs') {
        await app.render(req, res, '/faqs', query);
      } else if (pathname === '/privacypolicy') {
        await app.render(req, res, '/privacypolicy', query);
      }  else if (pathname === '/contact') {
        await app.render(req, res, '/contact', query);
      } else if (pathname === '/about') {
        await app.render(req, res, '/about', query);
      }else if (pathname === '/services') {
        await app.render(req, res, '/services', query);
      } else if (pathname === '/hotelManagement') {
        await app.render(req, res, '/hotelManagement', query);
      } else if (pathname === '/restaurantManagement') {
        await app.render(req, res, '/restaurantManagement', query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    }) 
});