function Tests() {
  // const [versions] = useState(window.electron.process.versions)
  const ipcAudio = () => window.electron.ipcRenderer.send('audio')
  const ipcAll = () => window.electron.ipcRenderer.send('all-test')

  return (
    <ul>
      <li className="electron-version">
        <button onClick={ipcAudio}>AUDIO TEST</button>
      </li>
      <li className="electron-version">
        <button onClick={ipcAll}>ALL TEST</button>
      </li>
      {/* <li className="chrome-version">Chromium v{versions.chrome}</li>
       <li className="node-version">Node v{versions.node}</li> */}
    </ul>
  )
}

export default Tests
