const Loading = () => {
  return (
    <>
      <div className='flex justify-center items-center h-40'>
        <div className='w-10 h-10 border-4 border-gray-300 border-t-gray-800 border-b-gray-800 border-l-gray-800 dark:border-gray-600 dark:border-t-gray-200 rounded-full animate-spin' style={{animationDuration: "500ms"}}></div>
      </div>
    </>
  );
};

export default Loading;
