// import Tests from './components/Tests'

import { useState } from 'react'
import { CONSTANT } from './constants'

function App() {
  const [state, setState] = useState(CONSTANT)
  const [checkAll, setCheckAll] = useState(false)

  function handleCheckAll(check) {
    console.log(check)

    setCheckAll(check)
    setState((ps) => ps.map((psObj) => ({ ...psObj, checked: check })))
  }
  // console.log(state, 'state')

  return (
    <div className="container">
      <div className="btn-group">
        <button>
          <StartSvg /> Start Session
        </button>
        <button>
          <StopSvg /> Stop Session
        </button>
        <button>
          <ReportSvg /> Last Report
        </button>
      </div>

      <table className="main">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={checkAll}
                onChange={(e) => handleCheckAll(e.target.checked)}
              />
            </th>
            <th>Category</th>
            <th>Test</th>
            <th>Auto/Manual</th>
            <th>Retries</th>
            <th>Allowed Failure</th>
            <th>Passed</th>
            <th>Failed</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {state.map(
            ({
              id,
              category,
              test,
              isAuto,
              retries,
              allowedFailure,
              passed,
              failed,
              result,
              checked
            }) => (
              <tr key={id}>
                <td>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) =>
                      setState((ps) =>
                        ps.map((psObj) => {
                          if (psObj.id === id) {
                            return { ...psObj, checked: e.target.checked }
                          } else {
                            return psObj
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>{category}</td>
                <td>{test}</td>
                <td>{isAuto}</td>
                <td>{retries}</td>
                <td>{allowedFailure}</td>
                <td>{passed}</td>
                <td>{failed}</td>
                <td>{result}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App

function StartSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#00ff00"
      className="bi bi-play"
      viewBox="0 0 16 16"
    >
      <path d="M10.804 8.428a.5.5 0 0 1 0 .854l-5.5 3.181A.5.5 0 0 1 4 11.681V4.319a.5.5 0 0 1 .804-.427l5.5 3.181Z" />
    </svg>
  )
}

function StopSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#ff0000"
      className="bi bi-stop"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5v5h5v-5h-5Z" />
      <path d="M2 2h12v12H2V2Zm1 1v10h10V3H3Z" />
    </svg>
  )
}

function ReportSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#0ff"
      className="bi bi-file-earmark-text"
      viewBox="0 0 16 16"
    >
      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM9 3v3a1 1 0 0 0 1 1h3v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4v2Zm1-.5L13.5 6H10a.5.5 0 0 1-.5-.5V2.5ZM5 7h6v1H5V7Zm0 2h6v1H5V9Zm0 2h6v1H5v-1Z" />
    </svg>
  )
}
