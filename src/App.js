import './App.scss';
import star from './images/icon-star.svg';

function App() {
  return (
    <div className="App">
      <div className="rating">
          {/*Rating state start*/}

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
                  <li className="rating__bubble">1</li>
                  <li className="rating__bubble">2</li>
                  <li className="rating__bubble">3</li>
                  <li className="rating__bubble">4</li>
                  <li className="rating__bubble">5</li>
              </ul>
              <a className="rating__btn">Submit</a>
          </div>

          {/*Rating state end*/}

          {/*Thank you state start*/}

          <div className="rating__voted">
              <img className="rating__transmissionImg" src="" alt="vote transmission" />
              <span className="rating__selected">You selected {/*Add rating here*/} out of 5</span>
              <h1 className="rating__title">Thank you!</h1>
              <p className="rating__description">We appreciate you taking the time to give a rating. If you ever need more support,
                  don’t hesitate to get in touch!</p>
          </div>

          {/*Thank you state end*/}
      </div>

      <div className="copyright">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://romainbegey.com">Romain BEGEY</a>.
      </div>
    </div>
  );
}

export default App;
