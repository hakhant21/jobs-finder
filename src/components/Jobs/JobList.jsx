import React from 'react';
import { useQuery } from 'react-query';
import Job from './Job';

const fetchJobs = async () => {
  const res = await fetch('http://homestead.test/api/jobs');
  const { data } = await res.json();
  // console.log(data);
  return data;
};

const JobList = () => {
  const { data } = useQuery('jobs', fetchJobs);
  return (
    <div className='container mx-auto'>
      <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data && data.map((job) => <Job key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default JobList;
