import React from 'react';

export default class CustomerInfoComponent extends React.Component {

  render() {
    return (
      <div className='customer-information'>
        <form>
          <fieldset className="fieldset">
            <legend>Bedrooms</legend>
            <input type="radio" name='bedroom' value='1' id="bedroom1"/><label for="bedroom1">1</label>
            <input type="radio" name='bedroom' value='2' id="bedroom1"/><label for="bedroom2">2</label>
            <input type="radio" name='bedroom' value='3' id="bedroom1"/><label for="bedroom3">3</label>
            <input type="radio" name='bedroom' value='4' id="bedroom1"/><label for="bedroom4">4</label>
            <input type="radio" name='bedroom' value='5' id="bedroom1"/><label for="bedroom5">5</label>
            <input type="radio" name='bedroom' value='6' id="bedroom1"/><label for="bedroom6">6</label>
          </fieldset>
        </form>
      </div>
    );
  }
}