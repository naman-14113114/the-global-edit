export function goneResponse() {
  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <title>Content retired | The Global Edit</title>
    <style>
      body{margin:0;background:#f5f0e8;color:#29231f;font:16px/1.6 Arial,sans-serif}
      main{max-width:680px;margin:12vh auto;padding:32px;border-top:3px solid #9f3f2b;background:#fcfaf6}
      h1{font-family:Georgia,serif;font-size:38px;line-height:1.15;margin:0 0 16px}
      a{color:#873321;font-weight:700}
    </style>
  </head>
  <body>
    <main>
      <p>HTTP 410</p>
      <h1>This content has been retired.</h1>
      <p>The page is no longer part of The Global Edit's practical-living publication.</p>
      <p><a href="/guides">Browse the current practical guides</a></p>
    </main>
  </body>
</html>`,
    {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=3600",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}
