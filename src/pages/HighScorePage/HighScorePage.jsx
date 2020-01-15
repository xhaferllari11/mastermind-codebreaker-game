import React from 'react';
import { Link } from 'react-router-dom';
import './HighScorePage.css'

// Hook function
const HighScore = (props) => {

    // const [scores, setScores] = useState([])

    // call a utility async fetch function to get scores from db

    return (
        <div className="high-score-page">
            <h1 className='high-score-title'>High Score Page</h1>
            {(props.highScores.length) ?
                <table className="table high-score-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Initials</th>
                            <th scope="col">Guesses</th>
                            <th scope="col">Seconds</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.highScores.map( (s,ind) => <tr key={ind}>
                            <th scope='row'>{ind}</th>
                            <td>{s.initials}</td>
                            <td>{s.guesses}</td>
                            <td>{s.seconds}</td>
                        </tr>)}
                    </tbody>
                </table>
                :
                <div>No high scores</div>
            }

            <Link
                className='btn btn-default'
                to='/'
            >Back to Home</Link>
        </div>
    )
}

export default HighScore;