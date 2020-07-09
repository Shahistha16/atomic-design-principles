import React from "react";
import { storiesOf } from "@storybook/react";

import Image from "./index";
import logo from "../../assets/images/amazonLogo.jpg";

storiesOf("Atoms", module).add("image", () => (
  <div style={{ padding: 10 }}>
    <Image src={logo} alt="" width="20" height="20" />
  </div>
));
