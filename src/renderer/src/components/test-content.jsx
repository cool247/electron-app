/* eslint-disable react/prop-types */
export default function TestContent({ selectedTests, setCurrentRunningTest, currentRunningTest }) {
  console.log(selectedTests, 'selectedTests', currentRunningTest)

  function handleClick() {
    setCurrentRunningTest((ps) => {
      const index = selectedTests.findIndex((e) => e.id === ps.id)

      return selectedTests[index + 1]
    })
  }

  if (currentRunningTest?.id === 0) {
    return (
      <div>
        Audio
        <button onClick={handleClick}>Pass</button>
        <button onClick={handleClick}>Fail</button>
      </div>
    )
  }

  if (currentRunningTest?.id === 1) {
    return (
      <div>
        Display
        <button onClick={handleClick}>Pass</button>
        <button onClick={handleClick}>Fail</button>
      </div>
    )
  }
}
