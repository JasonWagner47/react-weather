import React from 'react';

const search = (props) => (
  <form onSubmit={props.getWeather}>
    <div className="form-group my-2">
      <label className="d-block city-label" htmlFor="city">
        Please Type a City Below
      </label>
      <input type="text" className="form-control mb-2" name="city" placeholder="City" defaultValue="Denver" />
      <button type="submit" id="btnClick" className="btn btn-primary my-2">
        {' '}
        Get Weather{' '}
      </button>
    </div>
  </form>
);

export default search;
