import React, { useState } from 'react';
import Player from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import styled from 'styled-components';

const Container = styled.div``;

const Playlist = ({ songs, index }) => {
  const [audioInstance, setAudioInstance] = useState(null);
  console.log(audioInstance);
  return (
    <Container>
      <Player
        getAudioInstance={instance => setAudioInstance(instance)}
        audioLists={songs}
        mode="full"
        glassBg
        spaceBar
        defaultPosition={{ bottom: 0, left: 0 }}
        drag={false}
        remove={false}
        showLyric={false}
        showPlayMode={false}
        showMiniModeCover={false}
        showDownload={false}
        showThemeSwitch={false}
        showReload={false}
        autoPlay={false}
        playIndex={index}
      />
    </Container>
  );
};

export default Playlist;
