import { useEffect, useState } from "react";
import Typography from "./Typography";
import Tag from "./Tag";

function Sidebar() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://realworld.habsida.net/api/tags")
      .then((response) => response.json())
      .then((data) => {
        console.log("Tags from API:", data.tags);
        setTags(data.tags);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="sidebar--wrapper">
      <Typography variant="regularBold">Popular tags</Typography>
      <div className="tagList">
        {tags.slice(0, 10).map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
