import React from 'react';




const search = (props) => (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-3">
                            <form className="form-inline" onSubmit={props.getWeather}>
                            <div className="form-group">
                                <label htmlFor="city" className="sr-only">City</label>
                                <input type="text" className="form-control mb-2" name="city" placeholder="City" defaultValue="Denver"/>
                                <button type="submit" className="btn btn-primary mx-sm-3 mb-2"> Get Weather </button>
                                 </div>
                            </form>
                       
                    </div>
                </div>
            </div>
        );

export default search;