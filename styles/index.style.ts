import { css } from "@emotion/react";

const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap");

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  code,
  em,
  img,
  strong,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  tr,
  th,
  td,
  article,
  canvas,
  footer,
  header,
  menu,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: "Open Sans", sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const centeredColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { globalStyle, centeredColumn };
