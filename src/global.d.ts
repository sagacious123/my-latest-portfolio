declare module "*.png";
declare module "*.svg";
declare module "*.jpg";
declare module "*.gif";
declare module "*.mov";
declare module "*.pdf";
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
