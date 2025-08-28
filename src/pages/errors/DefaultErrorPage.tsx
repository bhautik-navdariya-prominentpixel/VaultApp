const DefaultErrorPage = () => {
  return (
    <main className='flex-grow flex items-center justify-center px-4 h-[100vh]'>
      <div className='text-center'>
        {/* Error Code */}
        <h1 className='text-7xl font-extrabold text-slate-800 dark:text-slate-200'>404</h1>
        {/* Error Message */}
        <p className='mt-4 text-lg text-slate-700 dark:text-slate-400'>
          Oops! The page you’re looking for doesn’t exist.
        </p>
        {/* Buttons */}
        <div className='mt-6 flex items-center justify-center space-x-4'>
          <a
            href='/'
            className='px-6 py-3 rounded-xl bg-slate-800 dark:bg-slate-600 text-white font-semibold hover:opacity-90 transition'
          >
            Go Home
          </a>
          <a
            href='/support'
            className='px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-slate-800 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition'
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
};

export default DefaultErrorPage;
