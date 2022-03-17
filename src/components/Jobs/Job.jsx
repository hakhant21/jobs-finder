import React from 'react';

const Job = ({ job }) => {
  return (
    <div className='group relative'>
      <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
        <img
          src={job.image}
          alt='Front of men&#039;s Basic Tee in black.'
          className='w-full h-full object-center object-cover lg:w-full lg:h-full'
        />
      </div>
      <div className='mt-2 flex justify-between'>
        <div>
          <h1 className="text-lg text-gray-700"> {job.title}</h1>
          <h3 className='text-sm text-gray-700'>
            <a href='#'>
              <span aria-hidden='true' className='absolute inset-0'></span>
              {job.position}
            </a>
          </h3>
          <p className='mt-1 text-xs text-gray-500'>{job.work_days}</p>
        </div>
      </div>
      <small className='text-sm font-medium text-gray-900'>
        {job.salary} Kyats
      </small>
    </div>
  );
};

export default Job;
