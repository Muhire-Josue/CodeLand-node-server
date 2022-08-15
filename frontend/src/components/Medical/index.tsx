/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

type Props = {
  data: Array<Record<string, string>>;
  loading: boolean;
};

const Medical: React.FC<Props> = ({ data, loading }): React.ReactElement => {
  console.log('=======>>>>>>> data', data);
  console.log('=======>>>>>>> loading', loading);
  return (
    <section className="Medical d-flex justify-content-center">
      <div className="container">
        {loading || !data.length ? (
          'Loading...'
        ) : (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">{Object.keys(data[0])[0]}</th>
                <th scope="col">{Object.keys(data[0])[1]}</th>
                <th scope="col">{Object.keys(data[0])[2]}</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((res, i) => (
                <tr key={Math.random() * 100}>
                  <th scope="row">{i + 1}</th>
                  <td>{res[Object.keys(res)[0]]}</td>
                  <td>{res[Object.keys(res)[1]]}</td>
                  <td>{res[Object.keys(res)[2]]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Medical;
