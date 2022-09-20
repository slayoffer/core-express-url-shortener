const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, urls, query }) {
  return (
    <Layout title={title}>
      <div className="flex flex-col items-center space-y-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Welcome to {title}</h1>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <form className="flex flex-col space-y-4" action="/urls" method="POST">
            <p className="font-bold">URL to shorten:</p>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" placeholder="http//:example.com" type="text" name="longURL" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Shorten it!</button>
          </form>
          {query.error ? (
            <h2 className="text-5xl text-red-800 font-bold py-4">Wrong URL!</h2>
          ) : null}
        </div>

        <div className="flex flex-col space-y-0.5 items-center">
          <h2 className="text-xl font-bold my-4">Shortened URLs</h2>
          {urls.length
            ? urls.map((url) => (
              <div className="flex flex-col items-center">
                <p><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={`http://localhost:7777/${url.short_link}`} target="_blank" rel="noreferrer">{`http://localhost:7777/${url.short_link}`}</a></p>
                <p>Clicks: {url.clicks}</p>
                <p><a href={url.long_link}>{url.long_link}</a></p>
                <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
              </div>
            ))
            : <h2 className="text-lg font-bold text-red-800">No URLs to display!</h2>}
        </div>
      </div>
    </Layout>
  );
};
