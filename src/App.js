import {useState} from 'react';
import './App.scss';
import star from './images/icon-star.svg';
import thankyou from './images/illustration-thank-you.svg';

const App = () => {

    const [selected, setSelected] = useState(0);
    const [voted, setVoted] = useState(false);
    const [error, setError] = useState(false);

    const handleClickRating = event => {
        setSelected(event.target.value);
    };

    const handleClickSubmit = event => {
        if (selected !== 0) {
            setVoted(true);
        } else {
            setError(true);
        }
    };

    return (
    <div className="App">
      <div className="rating">
          {
              voted ?

              <div className="rating__voted">
                  <img className="rating__transmissionImg" src={thankyou} alt="vote transmission" />
                  <span className="rating__score">You selected {selected} out of 5</span>
                  <h1 className="rating__title">Thank you!</h1>
                  <p className="rating__description">We appreciate you taking the time to give a rating. If you ever need more support,
                      don’t hesitate to get in touch!</p>
              </div>

              :

              <div className="rating__vote">
                  <a className="rating__starBubble">
                      <object data={star} className="rating__star"></object>
                  </a>
                  <h1 className="rating__title">How did we do?</h1>
                  <p className="rating__description">
                      Please let us know how we did with your support request. All feedback is appreciated
                      to help us improve our offering!
                  </p>
                  <ul className="rating__scoreList">
                      <li className={selected === 1 ? "rating__selected" : "rating__bubble"} onClick={handleClickRating} value={1}>1</li>
                      <li className={selected === 2 ? "rating__selected" : "rating__bubble"} onClick={handleClickRating} value={2}>2</li>
                      <li className={selected === 3 ? "rating__selected" : "rating__bubble"} onClick={handleClickRating} value={3}>3</li>
                      <li className={selected === 4 ? "rating__selected" : "rating__bubble"} onClick={handleClickRating} value={4}>4</li>
                      <li className={selected === 5 ? "rating__selected" : "rating__bubble"} onClick={handleClickRating} value={5}>5</li>
                  </ul>
                  <a className="rating__btn" onClick={handleClickSubmit}>Submit</a>
                  {error ? <p className="rating__description rating__error">You need to choose a score !</p> : <></>}
              </div>

          }
      </div>

      <div className="copyright">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://romainbegey.com">Romain BEGEY</a>.
      </div>
    </div>
    );
}

export default App;
