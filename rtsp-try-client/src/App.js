import logo from './logo.svg';
import './App.css';
import VideoFeed from "./components/VideoFeed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          This is my video stream:
        <VideoFeed src={'http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8'} />
      </header>
    </div>
  );
}

export default App;
