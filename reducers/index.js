import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    { title: "Livin' La Vida Loca", duration: 3.14 },
    { title: "Sittin' Up In My Room", duration: 3.14 },
    { title: "Waterfalls", duration: 3.14 },
    { title: "Always Be My Baby", duration: 3.14 }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer
});
