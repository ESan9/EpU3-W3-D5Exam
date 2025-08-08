import {
  BsShuffle,
  BsSkipStartFill,
  BsPlayFill,
  BsSkipEndFill,
  BsArrowRepeat,
} from "react-icons/bs";

const MiniPlayer = () => (
  <div
    className="d-flex align-items-center gap-2"
    style={{
      background: "#2b2b2b",
      padding: 6,
      borderRadius: 8,
      opacity: 0.85,
    }}
  >
    {[
      { Icon: BsShuffle, title: "Shuffle" },
      { Icon: BsSkipStartFill, title: "Previous" },
      { Icon: BsPlayFill, title: "Play" },
      { Icon: BsSkipEndFill, title: "Next" },
      { Icon: BsArrowRepeat, title: "Repeat" },
    ].map(({ Icon, title }, i) => (
      <button
        key={i}
        type="button"
        title={title}
        className="border-0 bg-transparent p-1"
        style={{ color: "#8a8a8a", cursor: "default" }}
        onClick={(e) => e.preventDefault()}
      >
        <Icon size={16} />
      </button>
    ))}
  </div>
);

export default MiniPlayer;
