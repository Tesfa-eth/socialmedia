import React from "react";
import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  console.log(image);
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://socialmedia-backend-mg9a.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
