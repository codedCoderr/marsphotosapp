import React, { useState, Fragment } from 'react';
import '../containers/SearchPage.css';
import axios from 'axios';
import DisplayPage from './DisplayPage';
const SearchPage = () => {
  const [images, setImages] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(!1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('Select...');
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Search');
  const onFormSubmit = async e => {
    try {
      e.preventDefault();
      setButtonText('Searching...');
  
      const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }, 
      referrer: '',
      referrerPolicy: 'no-referrer-when-downgrade',
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default',
      redirect: 'follow',
      integrity: ''
      };
      let data = JSON.stringify({ searchTerm, selectedOption });
      const response = await axios.post(
        'https://marsphotoserver.herokuapp.com/getimages',
        data,
        config,
        );
      if (searchTerm === '') {
        setError('The input field can not be blank');
        setHasLoaded(!1);
        setButtonText('Go again');
      } else if (selectedOption === 'Select...') {
        setError('Please select one of the listed Cameras');
        setButtonText('Go again');
      } else if (response.data.photos.length > 0) {
        setImages(response.data.photos);
        setError('');
        setHasLoaded(!0);
        setButtonText('Go again');
      } else {
        setError(
          'There are no images available for the entered Sol, please enter a different number'
        );
        setHasLoaded(!1);
        setButtonText('Go again');
      }
    } catch (error) {
      setError('Server error');
      setHasLoaded(!1);
      setButtonText('Go again');
    }
  };
  return (
    <div className='ui container segment'>
      <header className='black-80 tc pv4'>
        <i className='huge space shuttle icon' />
        <div className='f3 f1-m f-headline-l mb5 mt5'>Mars Photo API</div>
      </header>
      <div className='f3 mb4'>
        Explore image data gathered by NASA's Curiosity Rover on Mars.
      </div>

      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='f4 field'>
          <label htmlFor='sol'>Sol (ranging from one to max)</label>
          <input
            value={searchTerm}
            className='pa3 ba b--green '
            onChange={e => {
              setSearchTerm(e.target.value);
            }}
            type='text'
            name='sol'
            id='sol'
          />
        </div>
        <br />

        <div className=' f4 field'>
          <label htmlFor='camera'>Select from one of the Rover Cameras</label>
          <select
            value={selectedOption}
            className='pa3 ba b--green bg-blue'
            onChange={e => {
              setSelectedOption(e.target.value);
            }}
            name='camera'
            id='camera'>
            <option value='any'>Select...</option>
            <option value='FHAZ'>FHAZ</option>
            <option value='NAVCAM'>NAVCAM</option>
            <option value='MAST'>MAST</option>
            <option value='CHEMCAM'>CHEMCAM</option>
            <option value='MAHLI'>MAHLI</option>
            <option value='MARDI'>MARDI</option>
            <option value='RHAZ'>RHAZ</option>
          </select>
        </div>
        <br />
        <button
          className='f4 grow no-underline br ph5 pv2 mb2 bg-light-blue'
          type='submit'>
          {buttonText}
        </button>
      </form>
      <h4>{error}</h4>
      {hasLoaded && (
        <Fragment>
          <div className='ui container header'>
            <h3 className='counter'>
              Displaying images from Mars,taken on {searchTerm} Sol and by{' '}
              {selectedOption}'s Camera
            </h3>
          </div>
          <div className='ui container' />
          <DisplayPage images={images} />
        </Fragment>
      )}
    </div>
  );
};
export default SearchPage;
