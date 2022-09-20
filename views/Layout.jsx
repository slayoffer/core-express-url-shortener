const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <script src="https://cdn.tailwindcss.com" defer />
        <title>{title}</title>
      </head>
      <body className="p-10 bg-pink-200">
        {children}
      </body>
    </html>
  );
};
