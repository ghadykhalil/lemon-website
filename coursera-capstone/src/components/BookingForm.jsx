import { useState } from 'react'

const BookingForm = () => {
  const [resDate, setResDate] = useState('')
  const [resTime, setResTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('')

  const [resDateError, setResDateError] = useState('')
  const [resTimeError, setResTimeError] = useState('')
  const [guestsError, setGuestsError] = useState('')
  const [occasionError, setOccasionError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (resDate === '') {
      setResDateError('Please choose a date')
    } else {
      setResDateError('')
    }
    if (resTime === '') {
      setResTimeError('Please choose a time')
    } else {
      setResTimeError('')
    }
    if (occasion === '') {
      setOccasionError('Please select an occasion')
    } else {
      setOccasionError('')
    }
    if (guests < 1 || guests > 10) {
      setGuestsError('Number of guests must be between 1 and 10')
    } else {
      setGuestsError('')
    }
    if (!resDateError && !resTimeError && !guestsError && !occasionError) {
      console.log('Date:', resDate)
      console.log('Time:', resTime)
      console.log('Guests:', guests)
      console.log('Occasion:', occasion)
    }
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <form
        className="w-75"
        style={{ display: 'grid', gap: '20px' }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            className="form-control"
            type="date"
            id="res-date"
            name="res-date"
            value={resDate}
            onChange={(e) => setResDate(e.target.value)}
          />
          {resDateError && <div className="text-danger">{resDateError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            className="form-control"
            id="res-time"
            name="res-time"
            value={resTime}
            onChange={(e) => setResTime(e.target.value)}
          >
            <option></option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          {resTimeError && <div className="text-danger">{resTimeError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            className="form-control"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          {guestsError && <div className="text-danger">{guestsError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            className="form-control"
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {occasionError && <div className="text-danger">{occasionError}</div>}
        </div>
        <input
          className="btn btn-primary text-white w-25 fw-bolder"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </div>
  )
}

export default BookingForm
