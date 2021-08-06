import React from 'react';
import PropTypes from 'prop-types';

export default function Result({ result }) {
  const res = result[result.length - 1];

  return (
    <div>
      <pre>{JSON.stringify(res, 0, '  ')}</pre>
    </div>
  );
}
Result.propTypes = {
  result: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
