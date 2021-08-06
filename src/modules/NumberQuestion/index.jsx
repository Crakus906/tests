import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../component/Button';

import st from './style.module.scss';

export default function NumberQuestion({
  dataId, count, setCount, answerData,
}) {
  return (
    <div className={st.wrapperNumQuestion}>
      {dataId.map((e, i) => (
        <div
          key={e.id}
          className={`${st.container} ${answerData === '' ? `${st.f}` : `${st.true}`}`}
        >
          <Button
            className={e.id === count ? `${st.active}` : `${st.number}`}
            onClick={() => setCount(i + 1)}
          >
            {e.id}
          </Button>
        </div>
      ))}

    </div>
  );
}

NumberQuestion.propTypes = {
  dataId: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
    question: PropTypes.string,
    time: PropTypes.number,
  })).isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  answerData: PropTypes.shape({}).isRequired,
};
