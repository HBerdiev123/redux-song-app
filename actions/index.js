// action creator
export const selectSong = (song) => {
  // return action objects
  return {
    type: "SELECT_SONG",
    payload: song
  };
};
