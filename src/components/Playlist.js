import React, { useEffect } from 'react';
import Player from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { theme } from '../components/theme';
import styled from 'styled-components';

const Container = styled.div``;

const Playlist = ({ songs, index }) => {
  console.log(songs);

  return (
    <Container>
      <Player
        audioLists={songs}
        mode="full"
        preload
        glassBg
        showDestroy={false}
        showLyric={false}
        showMiniModeCover={false}
        showDownload={false}
        showThemeSwitch={false}
        showPlayMode={false}
        showReload={false}
        toggleMode={false}
        autoPlay={false}
        playIndex={index}
      />
    </Container>
  );
};

export default Playlist;
