import React from 'react';

const Loading = () => {
    return (

        // https://daisyui.com/components/button/
        // <div className=' h-screen flex justify-center items-center'>
        //     <button className="btn loading ">loading</button>
        // </div>

        // https://larainfo.com/blogs/tailwind-css-loading-spinner-example
        <div className="flex items-center justify-center ">
            <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;