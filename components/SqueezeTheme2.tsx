// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicSqueezeTheme2,
  DefaultSqueezeTheme2Props
} from "./plasmic/presell_app_test/PlasmicSqueezeTheme2";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface SqueezeTheme2Props extends Omit<DefaultSqueezeTheme2Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultSqueezeTheme2Props altogether and have
// total control over the props for your component.
export interface SqueezeTheme2Props extends DefaultSqueezeTheme2Props {}

function SqueezeTheme2_(
  props: SqueezeTheme2Props,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicSqueezeTheme2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicSqueezeTheme2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all SqueezeTheme2Props here, but feel free
  // to do whatever works for you.

  return <PlasmicSqueezeTheme2 root={{ ref }} {...props} />;
}

const SqueezeTheme2 = React.forwardRef(SqueezeTheme2_);
export default SqueezeTheme2;
