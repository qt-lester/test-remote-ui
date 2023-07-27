import { Button } from "@mui/material";
import React from "react";

function SampleComponent(props: { value: string }) {
  const { value } = props;

  return <Button variant="contained">{value}</Button>;
}

export default SampleComponent;
