import React from "react";
import AlbumInfo from "./AlbumInfo";
import MusicVideo from "./MusicVideo";
import Stream from "./Stream";
import TrackTable from "./TrackTable";

export default function MainContent() {
  return (
    <main>
      <AlbumInfo />
      <Stream />
      <TrackTable />
      <MusicVideo />
    </main>
  );
}
