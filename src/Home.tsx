import About from "./About";
import Contact from "./Contact";
import GroceryStore from "./GroceryStore";
import NoteApp from "./NoteApp";
import Spotify from "./Spotify";
import UrbanStore from "./UrbanStore";

export default function Home() {
  return (
    <div className="grid">
      <div className="grid-left grid-sett">
        <About />
        <Contact />
      </div>
      <div className="grid-center grid-sett">
        <NoteApp />
        <Spotify />
      </div>
      <div className="grid-right grid-sett">
        <UrbanStore />
        <GroceryStore />
      </div>
    </div>
  );
}
