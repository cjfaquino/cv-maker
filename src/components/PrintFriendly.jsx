import React, { useEffect } from 'react';
import Overview from './Overview';

const PrintFriendly = (props) => {
  useEffect(() => window.scrollTo(0, 0), []);

  const handleEdit = () => {
    const { changeSubmit } = props;
    changeSubmit();
  };

  const { object } = props;
  return (
    <div id='display' className='print-menu'>
      <div className='print-buttons'>
        <button
          type='button'
          className='edit-button no-print'
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          type='button'
          className='submit-button no-print'
          onClick={() => window.print()}
        >
          Print friendly version
        </button>
      </div>

      <Overview object={object} />
    </div>
  );
};

export default PrintFriendly;
