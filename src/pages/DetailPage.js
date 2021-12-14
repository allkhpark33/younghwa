import React from "react";
import { useParams } from "react-router";
import DetailContainer from "../containers/DetailContainer";

const DetailPage = () => {
  const params = useParams();
  const id = params.movieId;

  return <DetailContainer movieId={parseInt(id, 10)} />;
};

export default DetailPage;
