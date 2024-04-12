import React from 'react';

type Data = {
  flag: string;
  region: string;
  name: {
    common: string;
  };
}[];
const page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const data: Data = await response.json();

  return (
    <div>
      {data.map((country, index) => {
        return <div key={index}>{country.name.common}</div>;
      })}
    </div>
  );
};

export default page;
